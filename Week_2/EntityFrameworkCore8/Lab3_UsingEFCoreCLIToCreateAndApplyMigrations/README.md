# Lab 3: Using EF Core CLI to Create and Apply Migrations

## Objective
Use the EF Core CLI to generate and apply database migrations.

## Commands
```powershell
dotnet tool install --global dotnet-ef
dotnet ef migrations add InitialCreate
dotnet ef database update
```

## What to verify
- Tables `Products` and `Categories` are created in SQL Server.
