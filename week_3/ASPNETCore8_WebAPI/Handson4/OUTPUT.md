# Handson4 Output

## Startup
- Project: `week_3/ASPNETCore8_WebAPI/Handson4`
- Start command: `dotnet run --project "week_3\ASPNETCore8_WebAPI\Handson4\Handson4.csproj"`
- Swagger available at `http://localhost:<port>/swagger`

## Verification
- `GET /api/employee` returns hardcoded employee list
- `PUT /api/employee/{id}` validates `id` and updates employee data
- `PUT` returns `400 Bad Request` when `id <= 0` or employee is not found
- `POST` adds a new employee using `[FromBody]`
- `DELETE` removes an employee by id
