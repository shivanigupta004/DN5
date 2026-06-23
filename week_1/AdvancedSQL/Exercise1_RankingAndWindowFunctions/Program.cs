using System;
using System.Collections.Generic;
using System.Linq;

namespace Exercise1_RankingAndWindowFunctions
{
    internal sealed class Product
    {
        public string Category { get; init; } = string.Empty;
        public string Name { get; init; } = string.Empty;
        public decimal Price { get; init; }
    }

    internal sealed class RankedProduct
    {
        public string Category { get; init; } = string.Empty;
        public string Name { get; init; } = string.Empty;
        public decimal Price { get; init; }
        public int RowNumber { get; init; }
        public int Rank { get; init; }
        public int DenseRank { get; init; }
    }

    internal static class Program
    {
        private static void Main()
        {
            var products = new List<Product>
            {
                new() { Category = "Electronics", Name = "Noise-Cancelling Headphones", Price = 329.99m },
                new() { Category = "Electronics", Name = "4K Smart TV", Price = 899.50m },
                new() { Category = "Electronics", Name = "Wireless Speaker", Price = 199.99m },
                new() { Category = "Electronics", Name = "Bluetooth Earbuds", Price = 129.99m },
                new() { Category = "Electronics", Name = "Streaming Media Player", Price = 99.99m },

                new() { Category = "Home", Name = "Robot Vacuum", Price = 449.00m },
                new() { Category = "Home", Name = "Air Purifier", Price = 229.99m },
                new() { Category = "Home", Name = "Espresso Machine", Price = 349.95m },
                new() { Category = "Home", Name = "Blender", Price = 89.99m },
                new() { Category = "Home", Name = "Smart Thermostat", Price = 229.99m },

                new() { Category = "Sports", Name = "Carbon Fiber Bicycle", Price = 1599.00m },
                new() { Category = "Sports", Name = "Treadmill", Price = 1199.50m },
                new() { Category = "Sports", Name = "Fitness Tracker", Price = 149.95m },
                new() { Category = "Sports", Name = "Yoga Mat", Price = 39.99m },
                new() { Category = "Sports", Name = "Golf Bag", Price = 149.95m }
            };

            Console.WriteLine("Exercise 1: Ranking and Window Functions\n");
            PrintSqlExamples();

            var rankedProducts = GetRankedProducts(products);

            PrintRowNumberResults(rankedProducts);
            PrintRankResults(rankedProducts);
            PrintDenseRankResults(rankedProducts);

            Console.WriteLine("Demo complete.");
        }

        private static void PrintSqlExamples()
        {
            Console.WriteLine("SQL examples using window functions:");
            Console.WriteLine("  SELECT Category, Name, Price, ROW_NUMBER() OVER(PARTITION BY Category ORDER BY Price DESC) AS RowNumber");
            Console.WriteLine("  SELECT Category, Name, Price, RANK() OVER(PARTITION BY Category ORDER BY Price DESC) AS Rank");
            Console.WriteLine("  SELECT Category, Name, Price, DENSE_RANK() OVER(PARTITION BY Category ORDER BY Price DESC) AS DenseRank\n");
        }

        private static IReadOnlyList<RankedProduct> GetRankedProducts(List<Product> products)
        {
            var results = new List<RankedProduct>();

            foreach (var categoryGroup in products.GroupBy(p => p.Category).OrderBy(g => g.Key))
            {
                var ordered = categoryGroup.OrderByDescending(p => p.Price).ToList();
                int rowNumber = 0;
                int currentRank = 0;
                int denseRank = 0;
                decimal? previousPrice = null;
                int previousRank = 0;

                foreach (var product in ordered)
                {
                    rowNumber++;

                    if (previousPrice == null || product.Price != previousPrice)
                    {
                        currentRank = rowNumber;
                        denseRank++;
                    }
                    else
                    {
                        currentRank = previousRank;
                    }

                    results.Add(new RankedProduct
                    {
                        Category = product.Category,
                        Name = product.Name,
                        Price = product.Price,
                        RowNumber = rowNumber,
                        Rank = currentRank,
                        DenseRank = denseRank
                    });

                    previousPrice = product.Price;
                    previousRank = currentRank;
                }
            }

            return results;
        }

        private static void PrintRowNumberResults(IReadOnlyList<RankedProduct> rankedProducts)
        {
            Console.WriteLine("Top 3 products per category using ROW_NUMBER():");
            foreach (var row in rankedProducts.Where(r => r.RowNumber <= 3))
            {
                Console.WriteLine($"Category: {row.Category}, Product: {row.Name}, Price: {FormatPrice(row.Price)}, RowNumber: {row.RowNumber}");
            }

            Console.WriteLine();
        }

        private static void PrintRankResults(IReadOnlyList<RankedProduct> rankedProducts)
        {
            Console.WriteLine("Top products per category using RANK() (ties may skip values):");
            foreach (var row in rankedProducts.Where(r => r.Rank <= 3))
            {
                Console.WriteLine($"Category: {row.Category}, Product: {row.Name}, Price: {FormatPrice(row.Price)}, Rank: {row.Rank}");
            }

            Console.WriteLine();
        }

        private static void PrintDenseRankResults(IReadOnlyList<RankedProduct> rankedProducts)
        {
            Console.WriteLine("Top products per category using DENSE_RANK() (ties do not skip values):");
            foreach (var row in rankedProducts.Where(r => r.DenseRank <= 3))
            {
                Console.WriteLine($"Category: {row.Category}, Product: {row.Name}, Price: {FormatPrice(row.Price)}, DenseRank: {row.DenseRank}");
            }

            Console.WriteLine();
        }

        private static string FormatPrice(decimal price) => $"₹ {price:N2}";
    }
}
