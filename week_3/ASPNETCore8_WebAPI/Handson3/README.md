# Handson3 Web API with Custom Model and Filters

This project demonstrates:

- Custom model class `Employee`
- `AllowAnonymous` on a GET method
- `FromBody` usage to read JSON body data
- Custom action filter for request authorization header validation
- Custom exception filter to capture unhandled exceptions and return HTTP 500
- Swagger documentation for response types

## Project structure

- `Program.cs`: ASP.NET Core host and Swagger configuration.
- `Models/Employee.cs`: custom `Employee`, `Department`, and `Skill` classes.
- `Filters/CustomAuthFilter.cs`: checks `Authorization` header presence and Bearer token.
- `Filters/CustomExceptionFilter.cs`: catches exceptions and logs them to `exception.log`.
- `Controllers/EmployeeController.cs`: controller with read/write actions using `Employee` model.

## API endpoints

- `GET /api/employee` - returns list of employees (throws a test exception).
- `GET /api/employee/{id}` - returns a single employee.
- `POST /api/employee` - creates a new employee from request body.
- `PUT /api/employee/{id}` - updates an employee from request body.

## Notes

- `EmployeeController.Get()` returns `ActionResult<List<Employee>>` and uses `ProducesResponseType(StatusCodes.Status200OK)`.
- `Post` and `Put` use `[FromBody]` so JSON payloads are deserialized from the request body.
- `CustomAuthFilter` rejects requests lacking `Authorization` or missing `Bearer`.
- `CustomExceptionFilter` writes exception details to `exception.log` and returns HTTP 500.

## Swagger

Run the API and navigate to:

```text
https://localhost:[port]/swagger
```

Look for the `Employee` controller and verify the response status codes for GET and POST.
