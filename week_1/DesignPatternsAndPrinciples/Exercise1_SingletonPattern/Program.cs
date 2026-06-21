using System;

// Sample output when the program runs:
// [2026-06-21 22:37:35.888] Starting application.
// [2026-06-21 22:37:35.920] Logging from the second reference.
//
// firstLogger and secondLogger are the same instance: True
// Press any key to exit...
namespace Exercise1_SingletonPattern
{
    internal class Program
    {
        private static void Main(string[] args)
        {
            var firstLogger = Logger.Instance;
            var secondLogger = Logger.Instance;

            firstLogger.Log("Starting application.");
            secondLogger.Log("Logging from the second reference.");

            Console.WriteLine();
            Console.WriteLine($"firstLogger and secondLogger are the same instance: {ReferenceEquals(firstLogger, secondLogger)}");
            Console.WriteLine("Press any key to exit...");
            Console.ReadKey();
        }
    }
}
