using Microsoft.AspNetCore.Mvc;
using Microsoft.AspNetCore.Mvc.Filters;

namespace Handson3.Filters
{
    public class CustomExceptionFilter : IExceptionFilter
    {
        private readonly ILogger<CustomExceptionFilter> _logger;

        public CustomExceptionFilter(ILogger<CustomExceptionFilter> logger)
        {
            _logger = logger;
        }

        public void OnException(ExceptionContext context)
        {
            var ex = context.Exception;
            var message = $"{DateTime.UtcNow:O} - Exception: {ex.GetType().Name} - {ex.Message}\n{ex.StackTrace}\n";
            var logFile = Path.Combine(AppContext.BaseDirectory, "exception.log");
            File.AppendAllText(logFile, message);

            context.Result = new ObjectResult(new { error = ex.Message })
            {
                StatusCode = StatusCodes.Status500InternalServerError
            };
            context.ExceptionHandled = true;
        }
    }
}
