# Exercise 1 — Singleton Pattern (C#)

This exercise demonstrates a thread-safe Singleton `Logger` class that ensures only one logger instance exists during the application lifecycle.

## Project structure

- `Logger.cs` — `sealed` singleton logger using `Lazy<Logger>` for lazy, thread-safe initialization
- `Program.cs` — example usage that obtains `Logger.Instance` from two references and logs messages

## How to build and run

Open PowerShell and run:

```powershell
cd "C:\Users\94shi\OneDrive\Desktop\DN5\week_1\DesignPatternsAndPrinciples\Exercise1_SingletonPattern"
dotnet build
dotnet run
```

You should see timestamped log lines and a confirmation that both references are the same instance.

## Pattern notes

- The Singleton is implemented with a private constructor, a private static `Lazy<Logger>` field, and a public static `Instance` property.
- `Lazy<T>` ensures thread-safety and deferred initialization.

See `OUTPUT.md` for a sample run output.
