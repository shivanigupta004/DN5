# Exercise 2 — Factory Method Pattern (C#)

This sample demonstrates the Factory Method design pattern by creating different types of documents (Word, PDF, Excel) through concrete creator classes.

## Project structure

- `Program.cs` — demo client that uses the factory creators
- `Document.cs` — abstract `Document` base class and concrete products: `WordDocument`, `PdfDocument`, `ExcelDocument`
- `DocumentCreator.cs` — abstract `DocumentCreator` with concrete creators: `WordCreator`, `PdfCreator`, `ExcelCreator`
- `OUTPUT.md` — sample console output from a run

## How to build and run

Open PowerShell and run:

```powershell
cd "C:\Users\94shi\OneDrive\Desktop\DN5\week_1\DesignPatternsAndPrinciples\Exercise2_FactoryMethod"
dotnet build
dotnet run
```

The program will create three documents via their respective creators and print actions to the console.

## Pattern notes

- `DocumentCreator` declares the factory method `FactoryMethod(string name)` which is overridden by concrete creators to instantiate specific `Document` subclasses.
- Clients call `CreateDocument(string name)` on a creator to obtain a `Document` without depending on the concrete product classes.

See `OUTPUT.md` for a sample run.
