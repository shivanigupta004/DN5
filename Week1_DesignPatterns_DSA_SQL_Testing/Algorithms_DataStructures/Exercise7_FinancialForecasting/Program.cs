using System;
using System.Collections.Generic;
using System.Linq;

namespace Exercise7_FinancialForecasting
{
    public static class Forecasting
    {
        // Recursive forecast using a simple moving average of the last k values.
        // This example demonstrates recursion and a basic forecasting strategy.
        public static double RecursiveMovingAverageForecast(IReadOnlyList<double> history, int k)
        {
            if (history == null || history.Count == 0)
                throw new ArgumentException("History must contain at least one data point.");

            if (k <= 0)
                throw new ArgumentException("Window size k must be positive.");

            return RecursiveForecast(history, history.Count, k);
        }

        private static double RecursiveForecast(IReadOnlyList<double> history, int n, int k)
        {
            if (n <= 0)
                throw new ArgumentException("History length must be positive.");

            if (n <= k)
                return history.Take(n).Average();

            var lastKAverage = history.Skip(n - k).Take(k).Average();
            var previousForecast = RecursiveForecast(history, n - 1, k);
            return (lastKAverage + previousForecast) / 2.0;
        }
    }

    internal class Program
    {
        private static void Main(string[] args)
        {
            PrintRecursiveNotes();

            var history = new List<double> { 120.5, 123.0, 125.8, 124.1, 126.4, 128.0, 129.5 };
            var k = 3;

            Console.WriteLine("Historical values: " + string.Join(", ", history));
            Console.WriteLine($"Forecast window: last {k} values");
            Console.WriteLine();

            var forecast = Forecasting.RecursiveMovingAverageForecast(history, k);
            Console.WriteLine($"Forecasted next value: {forecast:F2}");

            Console.WriteLine();
            PrintAnalysis(history.Count, k);

            Console.WriteLine("Exercise 7 complete. Press any key to exit...");
            Console.ReadKey();
        }

        private static void PrintRecursiveNotes()
        {
            Console.WriteLine("Recursive algorithms notes:");
            Console.WriteLine("  - Recursion breaks a problem into smaller subproblems.");
            Console.WriteLine("  - Base case stops recursion, preventing infinite calls.");
            Console.WriteLine("  - Recursive forecasting can use past values to predict future data.");
            Console.WriteLine();
        }

        private static void PrintAnalysis(int historyCount, int k)
        {
            Console.WriteLine("Analysis:");
            Console.WriteLine("  - This implementation uses recursion to combine the last k values with a previous recursive forecast.");
            Console.WriteLine("  - Time complexity: O(n * k) in the worst case, since each recursive step computes an average over up to k values.");
            Console.WriteLine("  - Space complexity: O(n) due to recursion depth and storing history.");
            Console.WriteLine("  - In practice, iterative methods or dynamic programming would be faster and safer for large histories.");
            Console.WriteLine();
        }
    }
}
