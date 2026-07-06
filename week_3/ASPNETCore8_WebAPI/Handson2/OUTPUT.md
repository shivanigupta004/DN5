# Handson2 Output

Project path:
- `week_3/ASPNETCore8_WebAPI/Handson2`

## Startup

The API was started successfully using:

```powershell
cd "week_3\ASPNETCore8_WebAPI\Handson2"
dotnet run --project "Handson2.csproj"
```

The application started and is listening on:

- `http://localhost:5213`

## Swagger

Swagger UI is available at:

- `http://localhost:5213/swagger`

## Verified endpoint

- `GET http://localhost:5213/api/emp`

### Response

```json
[{"id":1,"name":"Alice","department":"HR"},{"id":2,"name":"Bob","department":"IT"},{"id":3,"name":"Charlie","department":"Finance"}]
```

## Notes

- The controller route has been changed from `api/employee` to `api/emp`.
- `ActionName("GetEmployeeById")` is used to distinguish the parameterized GET action for `CreatedAtAction` and documentation.
