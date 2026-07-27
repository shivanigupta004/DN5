# Advanced SQL Exercises

This folder contains SQL-related exercises covering window functions and stored procedures.

## Exercises

- `Exercise1_RankingAndWindowFunctions`
  - Demonstrates `ROW_NUMBER()`, `RANK()`, and `DENSE_RANK()`
  - Uses `PARTITION BY Category` and `ORDER BY Price DESC`
  - Includes a .NET console demo for ranking logic

- `Exercise1_CreateStoredProcedure`
  - Employee Management System schema
  - Creates `Departments` and `Employees` tables
  - Includes stored procedures `sp_GetEmployeesByDepartment` and `sp_InsertEmployee`

- `Exercise5_ReturnDataFromStoredProcedure`
  - Returns the total number of employees in a department
  - Uses the Employee Management System schema
  - Includes stored procedure `sp_GetEmployeeCountByDepartment`

## How to use

Open the folder for the exercise you want to run:

```powershell
cd "C:\Users\94shi\OneDrive\Desktop\DN5\week_1\AdvancedSQL\Exercise1_RankingAndWindowFunctions"
dotnet build
dotnet run
```

For SQL script review, open:

```powershell
cd "C:\Users\94shi\OneDrive\Desktop\DN5\week_1\AdvancedSQL\Exercise1_CreateStoredProcedure"
```

Then inspect `Exercise1_CreateStoredProcedure.sql` for the schema, sample data, and stored procedures.
