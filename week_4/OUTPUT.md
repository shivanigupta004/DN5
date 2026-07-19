# Week 4 Output

## Build verification
The project was created and verified with:

```bash
dotnet build week_4/MicroservicesArchitecture/MicroservicesArchitecture.csproj
```

Expected behavior after running the app:
- POST /api/Auth/login returns a JWT when the credentials are admin/password.
- GET /api/Auth/profile requires a valid Bearer token.

## Runtime verification

Sample `POST /api/Auth/login` response (token trimmed):

```
eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJodHRwOi8vc2NoZW1hcy54bWxzb2FwLm9yZy93cy8yMDA1LzA1L2lkZW50aXR5L2NsYWltcy9uYW1lIjoiYWRtaW4iLCJodHRwOi8vc2NoZW1hcy5taWNyb3NvZnQuY29tL3dzLzIwMDgvMDYvaWRlbnRpdHkvY2xhaW1zL3JvbGUiOiJBZG1pbiIsImV4cCI6MTc4NDQ4ODU1OCwiaXNzIjoiTXlBdXRoU2VydmVyIiwiYXVkIjoiTXlBcGlVc2VycyJ9.nVqT4YUfDq7Y1C5liLcVIWdCQIO8heGOFUzaIgHSOU4
```

Sample `GET /api/Auth/profile` response:

```
{
	"message": "Hello, admin! You are authenticated."
}
```
