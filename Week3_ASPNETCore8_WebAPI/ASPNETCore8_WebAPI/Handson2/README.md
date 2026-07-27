# Handson2 Web API with Swagger

This project demonstrates a simple ASP.NET Core Web API with Swagger documentation and an Employee controller.

## Project structure

- `Program.cs`: configures services, Swagger, and controller routing.
- `Controllers/EmployeeController.cs`: contains API endpoints for employee read/write actions.
- `appsettings.json`: configuration file.
- `Properties/launchSettings.json`: local dev launch profiles.

## Swagger setup

Swagger is enabled by:

- `builder.Services.AddSwaggerGen(...)`
- `app.UseSwagger()`
- `app.UseSwaggerUI(...)`

Swagger UI will be available at:

```text
https://localhost:[port]/swagger
```

## Employee API endpoints

- `GET /api/employee` - list all employees.
- `GET /api/employee/{id}` - get employee by id.
- `POST /api/employee` - create a new employee.
- `PUT /api/employee/{id}` - update an existing employee.
- `DELETE /api/employee/{id}` - delete an employee.

## Response type documentation

Controller methods use `ProducesResponseType(...)` to document possible HTTP responses for Swagger.

## Notes on routing and action names

- `[Route("api/emp")]` maps all endpoints in this controller under `/api/emp`.
- The `EmployeeController` route is changed so the API is now accessible at `/api/emp` instead of `/api/employee`.
- `ActionName` allows a method to expose a different action name in routing and link generation, for example `GetEmployeeById` in this controller.
- Use `ActionName` when you need more than one method with the same HTTP verb or when you want a more user-friendly action name.

## Postman usage

In Postman:

- Use the method dropdown to choose GET, POST, PUT, or DELETE.
- Use the `Body` tab with `raw` and `JSON` selected for POST/PUT.
- Add request headers like `Content-Type: application/json`.
- Save requests to a collection and open multiple requests in tabs.

## Sample POST body

```json
{
  "name": "David",
  "department": "Sales"
}
```
