using System.Text.Json;
using Confluent.Kafka;

const string bootstrapServers = "localhost:9092";
const string topic = "chat-messages";

Console.WriteLine("Kafka Chat Demo");
Console.WriteLine("Type 'producer' to send messages or 'consumer' to listen.");
Console.Write("Mode: ");
var mode = Console.ReadLine()?.Trim()?.ToLowerInvariant();

if (mode == "producer")
{
    RunProducer();
}
else if (mode == "consumer")
{
    RunConsumer();
}
else
{
    Console.WriteLine("Unknown mode. Use 'producer' or 'consumer'.");
}

void RunProducer()
{
    var config = new ProducerConfig
    {
        BootstrapServers = bootstrapServers,
        Acks = Acks.All
    };

    using var producer = new ProducerBuilder<string, string>(config).Build();

    Console.WriteLine("Producer started. Enter chat messages. Type 'exit' to quit.");

    while (true)
    {
        Console.Write("Message: ");
        var input = Console.ReadLine();
        if (string.IsNullOrWhiteSpace(input))
        {
            continue;
        }

        if (input.Equals("exit", StringComparison.OrdinalIgnoreCase))
        {
            break;
        }

        var message = new ChatMessage
        {
            User = Environment.UserName,
            Text = input,
            SentAt = DateTime.UtcNow
        };

        var payload = JsonSerializer.Serialize(message);
        producer.Produce(topic, new Message<string, string> { Key = message.User, Value = payload }, deliveryReport =>
        {
            if (deliveryReport.Error.IsError)
            {
                Console.WriteLine($"Delivery error: {deliveryReport.Error.Reason}");
            }
            else
            {
                Console.WriteLine($"Message sent to partition {deliveryReport.Partition}, offset {deliveryReport.Offset}");
            }
        });

        producer.Flush(TimeSpan.FromSeconds(5));
    }
}

void RunConsumer()
{
    var config = new ConsumerConfig
    {
        BootstrapServers = bootstrapServers,
        GroupId = "chat-consumer-group",
        AutoOffsetReset = AutoOffsetReset.Earliest,
        EnableAutoCommit = true
    };

    using var consumer = new ConsumerBuilder<string, string>(config).Build();
    consumer.Subscribe(topic);

    Console.WriteLine("Consumer started. Waiting for chat messages... Press Ctrl+C to stop.");

    Console.CancelKeyPress += (_, e) =>
    {
        e.Cancel = true;
        consumer.Close();
        Environment.Exit(0);
    };

    while (true)
    {
        try
        {
            var result = consumer.Consume(CancellationToken.None);
            var message = JsonSerializer.Deserialize<ChatMessage>(result.Message.Value);
            Console.WriteLine($"[{message?.SentAt:O}] {message?.User}: {message?.Text}");
        }
        catch (ConsumeException ex)
        {
            Console.WriteLine($"Consume error: {ex.Error.Reason}");
        }
        catch (Exception ex)
        {
            Console.WriteLine($"Error: {ex.Message}");
        }
    }
}

record ChatMessage
{
    public string? User { get; init; }
    public string? Text { get; init; }
    public DateTime SentAt { get; init; }
}
