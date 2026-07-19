# DN5 Workspace Overview

This repository contains course materials organized by week.

- `week_1` — Advanced SQL, Algorithms & Data Structures, Design Patterns, and NUnit/Moq hands-on exercises.
- `Week_2` — Entity Framework Core 8 labs (database context, migrations, data seeding, querying).
- `week_3` — ASP.NET Core 8 Web API hands-on projects and utilities. Contains the `ASPNETCore8_WebAPI` folder and `tmp_openapi_inspect` utility.
- `week_4` — Microservices and Authentication exercises. Contains `MicroservicesArchitecture` (JWT authentication example).

Quick run notes

- MicroservicesArchitecture (Week 4):

```bash
cd week_4/MicroservicesArchitecture
# build
dotnet build
# run (example HTTP URL)
dotnet run --project MicroservicesArchitecture.csproj --urls http://127.0.0.1:5080
```

- tmp_openapi_inspect (Week 3):

```powershell
cd week_3/tmp_openapi_inspect
dotnet run --project tmp_openapi_inspect.csproj
```

Notes

- Some projects target .NET 10 (`net10.0`). Ensure you have a compatible .NET SDK installed.
- For running Web APIs, check the console output for the exact listening URLs (HTTP/HTTPS) and use those when calling endpoints.

If you want, I can add per-week README entries listing each subfolder and a short description.
