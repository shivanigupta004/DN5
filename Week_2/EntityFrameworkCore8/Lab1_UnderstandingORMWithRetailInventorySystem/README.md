# EF Core 8.0 Guided Hands-On Exercises

## Lab 1: Understanding ORM with a Retail Inventory System

### Scenario
You're building an inventory management system for a retail store. The store wants to track products, categories, and stock levels in a SQL Server database.

### Objective
Understand what ORM is and how EF Core helps bridge the gap between C# objects and relational tables.

### Steps

#### 1. What is ORM?
- Explain how ORM maps C# classes to database tables.
- **Benefits**: Productivity, maintainability, and abstraction from SQL.

#### 2. EF Core vs EF Framework
- **EF Core** is cross-platform, lightweight, and supports modern features like LINQ, async queries, and compiled queries.
- **EF Framework (EF6)** is Windows-only and more mature but less flexible.

#### 3. EF Core 8.0 Features
- JSON column mapping.
- Improved performance with compiled models.
- Interceptors and better bulk operations.

#### 4. Create a .NET Console App
```bash
dotnet new console -n RetailInventory
cd RetailInventory
```

#### 5. Install EF Core Packages
```bash
dotnet add package Microsoft.EntityFrameworkCore.SqlServer
dotnet add package Microsoft.EntityFrameworkCore.Design
```

### Project Structure
- **Models/** - Domain models (Product, Category, etc.)
- **Data/** - DbContext and database configurations
- **Program.cs** - Entry point and application setup

### Next Steps
1. Define your domain models in the Models folder
2. Create a DbContext in the Data folder
3. Implement database migrations
4. Execute CRUD operations using LINQ queries
