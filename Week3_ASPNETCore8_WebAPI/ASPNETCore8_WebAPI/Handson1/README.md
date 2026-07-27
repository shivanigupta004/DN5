# Handson1 Web API

This project demonstrates a simple ASP.NET Core Web API created under `week_3/ASPNETCore8_WebAPI/Handson1`.

## Project structure

- `Program.cs`: configures the ASP.NET Core pipeline and enables controller routing.
- `Controllers/ValuesController.cs`: contains API endpoints for read/write operations.
- `appsettings.json`: application configuration data.
- `Properties/launchSettings.json`: local launch settings and profiles.

## API endpoints

- `GET /api/values` - returns all values.
- `GET /api/values/{id}` - returns a single value by id.
- `POST /api/values` - creates a new value.
- `PUT /api/values/{id}` - updates an existing value.
- `DELETE /api/values/{id}` - deletes a value.

## REST and Web API concepts

- RESTful web service: an API that uses HTTP verbs, resource-oriented URLs, and stateless communication.
- Web API: an HTTP-based API that exposes endpoints for clients to consume.
- Microservice: a small, independently deployable service that usually exposes an API and manages its own data.
- HTTP request/response: a client sends an `HttpRequest` to the server; the server returns an `HttpResponse` with status codes and data.

## Action verbs

This controller uses standard HTTP action verbs:

- `HttpGet`: read data.
- `HttpPost`: create new data.
- `HttpPut`: update existing data.
- `HttpDelete`: remove data.

## HTTP status codes returned

- `Ok(...)` - 200 OK
- `CreatedAtAction(...)` - 201 Created
- `BadRequest(...)` - 400 Bad Request
- `NotFound(...)` - 404 Not Found
- `NoContent()` - 204 No Content

## Running the sample

From the project folder, run:

```powershell
cd "week_3\ASPNETCore8_WebAPI\Handson1"
dotnet run
```

Then open the browser or use an HTTP client to call:

```text
https://localhost:5001/api/values
```

## Notes for .NET 10 Web API

- `Program.cs` replaces `Startup.cs` in minimal hosting.
- `appsettings.json` stores configuration data.
- `launchSettings.json` controls local development profiles.
- In .NET Framework 4.5, Web API also used `RouteConfig` and `WebApiConfig` for routing.
