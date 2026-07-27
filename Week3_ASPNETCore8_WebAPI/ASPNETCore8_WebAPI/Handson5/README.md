# Handson5

## Objectives
- Explain CORS enablement for Web API access from local applications
- Demonstrate JWT/Bearer authentication in Web API
- Use `Authorize` attribute and role-based access control
- Create an `AuthController` to generate tokens
- Secure Employee controller and test with Postman

## How it works
- CORS is enabled using `AddCors` in `Program.cs` and `UseCors()` in the request pipeline.
- JWT authentication is configured with `AddAuthentication` and `AddJwtBearer`.
- `AuthController` is anonymous and returns a token for a given `userId`.
- `EmployeeController` requires roles `POC` or `Admin`.
- The JWT expires after 2 minutes.

## Endpoints
- `GET /api/auth/token?userId=1` - generate token with `Admin` role
- `GET /api/employee` - requires valid JWT and role `POC` or `Admin`
- `GET /api/employee/{id}` - requires JWT
- `POST /api/employee` - requires JWT
- `PUT /api/employee/{id}` - requires JWT
- `DELETE /api/employee/{id}` - requires JWT

## JWT details
- Issuer: `mySystem`
- Audience: `myUsers`
- Signing key: `mysuperdupersecret`
- Token lifetime: 2 minutes
