# Handson6

## Kafka Integration with C#

This demo implements a simple chat application using Apache Kafka and .NET.

### Topics covered
- Introduction to Kafka
- Kafka architecture
- Topics and partitions
- Brokers
- Kafka for .NET using `Confluent.Kafka`
- Installation and configuration basics
- Demo chat producer and consumer

### Handson
1. Run the application in `producer` mode to send chat messages to Kafka.
2. Run the application in `consumer` mode to listen for chat messages.
3. Use multiple instances to simulate different chat clients.

### Assumptions
- Kafka broker is running locally at `localhost:9092`.
- Kafka topic used: `chat-messages`.

### Commands
- `dotnet run` and enter `producer` or `consumer`

### Notes
- Producer serializes chat messages as JSON.
- Consumer deserializes messages and prints them to the console.
