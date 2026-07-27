# Moq Hands-on

## Objectives

- Understand how mocking can enhance Test-Driven Development (TDD)
- Explain the meaning of mocking in Unit Testing and why mocks are used
- Understand mocking, isolation, test doubles, and the difference between mocks, fakes, and stubs
- Understand the basics of Dependency Injection (DI) and how it helps unit testing
- Demonstrate creating testable code with Moq
- Demonstrate mocking objects that access a database or file system

## Scenario

You are tasked with testing a mail-sending module without sending email. The solution is to inject a mock `IMailSender` dependency into `CustomerComm` so the unit test can run in isolation.

## Task 1

Create a class library called `CustomerCommLib` and implement:

- `IMailSender`
- `MailSender` (real implementation using `SmtpClient`)
- `CustomerComm` which depends on `IMailSender`

## Task 2

Create a unit test project called `CustomerComm.Tests` using NUnit and Moq. The tests should:

- Use `[TestFixture]`, `[OneTimeSetUp]`, `[TearDown]`, and `[TestCase]`
- Mock `IMailSender` so `SendMail` returns `true` for any input
- Assert `CustomerComm.SendMailToCustomer()` returns `true`

## Included files

- `CustomerCommLib/CustomerCommLib.csproj`
- `CustomerCommLib/IMailSender.cs`
- `CustomerCommLib/MailSender.cs`
- `CustomerCommLib/CustomerComm.cs`
- `CustomerComm.Tests/CustomerComm.Tests.csproj`
- `CustomerComm.Tests/CustomerCommTests.cs`

## How to run

Open PowerShell and run:

```powershell
cd "C:\Users\94shi\OneDrive\Desktop\DN5\week_1\NUnitAndMoq\Moq_Handson\CustomerComm.Tests"
dotnet test
```
