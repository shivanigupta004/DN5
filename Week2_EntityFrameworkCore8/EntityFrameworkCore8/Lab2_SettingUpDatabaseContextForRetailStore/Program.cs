using Microsoft.EntityFrameworkCore;

namespace RetailInventorySystem.Lab2;

public class Category
{
    public int Id { get; set; }
    public string Name { get; set; } = string.Empty;
    public List<Product> Products { get; set; } = new();
}

public class Product
{
    public int Id { get; set; }
    public string Name { get; set; } = string.Empty;
    public decimal Price { get; set; }
    public int CategoryId { get; set; }
    public Category? Category { get; set; }
}

public class AppDbContext : DbContext
{
    public DbSet<Product> Products => Set<Product>();
    public DbSet<Category> Categories => Set<Category>();

    protected override void OnConfiguring(DbContextOptionsBuilder optionsBuilder)
    {
        var connectionString = "Server=localhost;Database=RetailStoreDb;Trusted_Connection=True;TrustServerCertificate=True;";
        optionsBuilder.UseSqlServer(connectionString);
    }
}

internal class Program
{
    private static void Main()
    {
        Console.WriteLine("=== Lab 2: Setting Up the Database Context for a Retail Store ===");
        Console.WriteLine("The DbContext is configured to connect to SQL Server.");

        using var context = new AppDbContext();
        Console.WriteLine("DbContext created successfully.");
        Console.WriteLine("Entities ready: Products and Categories.");
        Console.WriteLine("Update the connection string in Program.cs to match your SQL Server instance.");
    }
}
