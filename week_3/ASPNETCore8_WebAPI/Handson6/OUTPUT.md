# Handson6 Output

## Startup
- Project: `week_3/ASPNETCore8_WebAPI/Handson6`
- Start as producer or consumer:
  - `dotnet run` then enter `producer`
  - `dotnet run` then enter `consumer`

## Kafka demo
- Topic: `chat-messages`
- Broker: `localhost:9092`
- Producer sends chat messages as JSON
- Consumer reads messages and prints them in the console

## Verification
- Producer mode sends a message and displays partition/offset.
- Consumer mode receives messages and prints timestamp, user, and text.
- Use separate application instances to simulate multiple chat clients.
