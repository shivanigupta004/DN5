# Week 2 - Entity Framework Core 8 Hands-On Labs

This week focuses on learning Entity Framework Core 8 through practical console-based exercises for a retail inventory system.

## Labs Included

1. Lab 1 - Understanding ORM with a Retail Inventory System
   - Learn what ORM is and how EF Core maps C# objects to database tables.
   - Understand EF Core vs EF6 and key EF Core 8 features.

2. Lab 2 - Setting Up the Database Context for a Retail Store
   - Create models for Category and Product.
   - Configure AppDbContext and connect to SQL Server.

3. Lab 3 - Using EF Core CLI to Create and Apply Migrations
   - Use dotnet-ef to create and apply the initial database schema.

4. Lab 4 - Inserting Initial Data into the Database
   - Insert sample categories and products using EF Core.

5. Lab 5 - Retrieving Data from the Database
   - Retrieve data using ToListAsync, FindAsync, and FirstOrDefaultAsync.

## Project Structure

- Lab1_UnderstandingORMWithRetailInventorySystem
- Lab2_SettingUpDatabaseContextForRetailStore
- Lab3_UsingEFCoreCLIToCreateAndApplyMigrations
- Lab4_InsertingInitialDataIntoTheDatabase
- Lab5_RetrievingDataFromTheDatabase

## How to Run a Lab

Open any lab folder and run:

```powershell
dotnet run
```

## Notes

- These labs are designed as beginner-friendly EF Core exercises.
- Update the SQL Server connection string in each project if needed.
- For real database setup, make sure SQL Server is available and accessible.
