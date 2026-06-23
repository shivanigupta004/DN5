# Exercise 1 — Ranking and Window Functions (Advanced SQL)

This project demonstrates ranking and window-function behavior using a product dataset. The goal is to show how `ROW_NUMBER()`, `RANK()`, and `DENSE_RANK()` behave when finding the top products per category.

## What this exercise covers

- Using `PARTITION BY Category` with `ORDER BY Price DESC`
- Assigning unique sequential ranks with `ROW_NUMBER()`
- Comparing `RANK()` handling of tied prices
- Comparing `DENSE_RANK()` handling of tied prices
- Printing the top 3 most expensive products in each category

## How to build and run

Open PowerShell and run:

```powershell
cd "C:\Users\94shi\OneDrive\Desktop\DN5\week_1\DesignPatternsAndPrinciples\AdvancedSQL\Exercise1_RankingAndWindowFunctions"
dotnet build
dotnet run
```

## SQL query examples

```sql
SELECT Category, Name, Price,
       ROW_NUMBER() OVER(PARTITION BY Category ORDER BY Price DESC) AS RowNumber
FROM Products;

SELECT Category, Name, Price,
       RANK() OVER(PARTITION BY Category ORDER BY Price DESC) AS Rank
FROM Products;

SELECT Category, Name, Price,
       DENSE_RANK() OVER(PARTITION BY Category ORDER BY Price DESC) AS DenseRank
FROM Products;
```

## Files included

- `Exercise1_RankingAndWindowFunctions.csproj` — .NET Console app project file
- `Program.cs` — sample data and ranking logic
- `README.md` — this project overview and run instructions
- `OUTPUT.md` — sample console output from a successful run
