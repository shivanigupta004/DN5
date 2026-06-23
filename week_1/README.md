# Week 1

This folder contains the Week 1 exercises for the DN5 repository, covering SQL, algorithms, design patterns, and unit testing with NUnit and Moq.

## Folders

- `AdvancedSQL/`
  - `Exercise1_RankingAndWindowFunctions/` - Demonstrates row-level ranking with `ROW_NUMBER()`, `RANK()`, and `DENSE_RANK()` using a .NET console app.
  - `Exercise1_CreateStoredProcedure/` - Shows Employee Management System schema and stored procedures for inserting and retrieving employees.
  - `Exercise5_ReturnDataFromStoredProcedure/` - Demonstrates stored procedure creation to return employee counts by department.

- `Algorithms_DataStructures/`
  - Includes data structure and algorithm exercises such as e-commerce search function implementation.

- `DesignPatternsAndPrinciples/`
  - Contains design pattern exercises like Singleton and Factory Method.

- `NUnitAndMoq/`
  - `NUnit_Handson/` - Hands-on NUnit exercise with a calculator library, unit tests, and example usage of `[SetUp]`, `[TearDown]`, `[Ignore]`, and parameterized tests.
  - `Moq_Handson/` - Hands-on Moq exercise with a mail sender library, dependency injection, and NUnit tests mocking external mail sending behavior.

## How to use

Each project includes its own `README.md` with run instructions. Open the specific project folder and follow the instructions there.

Example:

```powershell
cd "C:\Users\94shi\OneDrive\Desktop\DN5\week_1\AdvancedSQL\Exercise1_RankingAndWindowFunctions"
dotnet build
dotnet run
```

For unit tests:

```powershell
cd "C:\Users\94shi\OneDrive\Desktop\DN5\week_1\NUnitAndMoq\NUnit_Handson"
dotnet test
```

```powershell
cd "C:\Users\94shi\OneDrive\Desktop\DN5\week_1\NUnitAndMoq\Moq_Handson"
dotnet test
```
