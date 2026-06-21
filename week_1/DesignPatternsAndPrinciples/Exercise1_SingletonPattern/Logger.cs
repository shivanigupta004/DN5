using System;

namespace Exercise1_SingletonPattern
{
    public sealed class Logger
    {
        private static readonly Lazy<Logger> _instance = new Lazy<Logger>(() => new Logger());

        private Logger()
        {
            // Initialize logging resources here if needed.
        }

        public static Logger Instance => _instance.Value;

        public void Log(string message)
        {
            var timestamp = DateTime.Now.ToString("yyyy-MM-dd HH:mm:ss.fff");
            Console.WriteLine($"[{timestamp}] {message}");
        }
    }
}
