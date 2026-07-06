# Handson3 Output

Project path:
- `week_3/ASPNETCore8_WebAPI/Handson3`

## Startup Verification

The project was started successfully with:

```powershell
dotnet run --project "week_3\ASPNETCore8_WebAPI\Handson3\Handson3.csproj"
```

The API is listening on:

- `http://localhost:5096`

## Swagger

Swagger UI is available at:

- `http://localhost:5096/swagger`

## GET /api/employee

The `GET /api/employee` action is configured to throw a test exception for demonstration.
This verifies custom exception handling and the `500 Internal Server Error` response.

## Notes

- Custom model `Employee` defined in `Models/Employee.cs`
- `AllowAnonymous` used on the GET action
- `[FromBody]` used on POST and PUT actions to bind request body JSON
- `CustomAuthFilter` validates `Authorization` header and Bearer token
- `CustomExceptionFilter` logs exceptions to `exception.log` and returns HTTP 500
