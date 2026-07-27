using Microsoft.EntityFrameworkCore;

namespace RetailInventorySystem.Lab3;

public class Category
{
    public int Id { get; set; }
    public string Name { get; set; } = string.Empty;
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
        Console.WriteLine("=== Lab 3: Using EF Core CLI to Create and Apply Migrations ===");
        Console.WriteLine("Run the following commands to create and apply migrations:");
        Console.WriteLine("dotnet tool install --global dotnet-ef");
        Console.WriteLine("dotnet ef migrations add InitialCreate");
        Console.WriteLine("dotnet ef database update");
    }
}
