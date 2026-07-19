# Week 4 - Authentication and Authorization Hands-On

This folder contains a sample ASP.NET Core Web API microservice that demonstrates JWT-based authentication and authorization.

## Project
- Project name: MicroservicesArchitecture
- Location: week_4/MicroservicesArchitecture

## What it implements
- JWT login endpoint at /api/Auth/login
- Protected profile endpoint at /api/Auth/profile
- Authentication and authorization middleware setup
- Configuration-driven JWT settings from appsettings.json

## Run the project
```bash
cd week_4/MicroservicesArchitecture
dotnet run
```

## Example requests
### Login
```bash
curl -X POST "https://localhost:5001/api/Auth/login" \
  -H "Content-Type: application/json" \
  -d '{"username":"admin","password":"password"}'
```

### Access protected endpoint
```bash
curl -X GET "https://localhost:5001/api/Auth/profile" \
  -H "Authorization: Bearer <token>"
```
