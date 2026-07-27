# Week 3

This folder contains exercises and supporting code for Week 3.

## tmp_openapi_inspect

`tmp_openapi_inspect` is a small console utility moved here that inspects the `Microsoft.OpenApi` assembly metadata. It was used to enumerate types related to OpenAPI/OpenApiInfo.

Files:
- `Program.cs` - small program that reads the `Microsoft.OpenApi.dll` and prints OpenAPI-related types.
- `tmp_openapi_inspect.csproj` - project file (net10.0).

How to run:

1. Ensure you have the `Microsoft.OpenApi` package available in your NuGet cache or restore packages.
2. From this folder run:

```powershell
cd week_3/tmp_openapi_inspect
dotnet run --project tmp_openapi_inspect.csproj
```

Note: The program currently points to a local NuGet package path in `Program.cs`. Update the `path` variable if you need to inspect a different assembly location.

## ASPNETCore8_WebAPI

The `ASPNETCore8_WebAPI` folder contains hands-on Web API exercises for ASP.NET Core 8 used during Week 3. It includes multiple `Handson` projects demonstrating controller routing, dependency injection, middleware, and basic API patterns.

Quick start:

```powershell
cd week_3/ASPNETCore8_WebAPI/Handson1
dotnet run
```

Then open the URL shown in the console (typically `https://localhost:5001` or the HTTP URL shown) and explore the API endpoints or use the provided Swagger UI if the project exposes it.

If you want, I can add short run instructions for each Handson subfolder.
