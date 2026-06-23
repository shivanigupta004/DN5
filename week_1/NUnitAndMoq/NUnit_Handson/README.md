# NUnit Hands-on

## Objectives

- Explain the meaning of unit testing and how it differs from functional testing
- List various types of testing
- Understand the benefit of automated testing
- Explain what loosely coupled and testable design means
- Write your first testing program to validate a calculator addition operation
- Understand the need for `[SetUp]`, `[TearDown]`, and `[Ignore]` attributes
- Explain the benefit of writing parameterized test cases

## Exercise

This hands-on exercise uses a simple `CalcLibrary` to demonstrate NUnit tests.

### Steps

1. Create a unit test project in the solution.
2. Add `CalcLibrary` as a project reference.
3. Create `CalculatorTests` and use `[TestFixture]`, `[SetUp]`, and `[TearDown]`.
4. Write a test method for addition functionality.
5. Use `[TestCase]` to send inputs and expected results.
6. Use `Assert.That` to verify actual and expected values match.

## Included files

- `CalcLibrary/CalcLibrary.csproj`
- `CalcLibrary/Calculator.cs`
- `CalculatorTests/CalculatorTests.csproj`
- `CalculatorTests/CalculatorTests.cs`

## How to run

Open PowerShell and run:

```powershell
cd "C:\Users\94shi\OneDrive\Desktop\DN5\week_1\NUnitAndMoq\NUnit_Handson\CalculatorTests"
dotnet test
```
