# DN5 Workspace Overview

This workspace contains hands-on labs grouped by training week.

> Key focus areas include backend development, modern UI building, testing, and full-stack learning paths.

## Weeks

### Week 1
Focuses on core programming and software design fundamentals, including design patterns, data structures and algorithms, SQL queries, and NUnit/Moq-based unit testing.

### Week 2
Covers Entity Framework Core 8, including ORM concepts, DbContext configuration, database migrations, and practical data access patterns.

### Week 3
Introduces ASP.NET Core 8 Web API development with hands-on practice in building APIs, working with controllers, and exploring OpenAPI support.

### Week 4
Explores microservices architecture, service-oriented design, and JWT-based authentication for secure application development.

### Week 5
Focuses on front-end development with React, including component structure, event handling, conditional rendering, and interactive UI examples.

### Week 6
Covers Angular fundamentals through a standalone Student Course Portal, including components, routing, forms, services, and testing.

### Week 7
Focuses on Git hands-on labs, including repository setup, `.gitignore`, branching, merge conflict resolution, and cleanup/push workflows.

## Highlights

- Build strong foundations in C#, .NET, SQL, and web APIs.
- Explore modern front-end development with React and Angular.
- Practice testing with NUnit, Moq, and Angular unit tests.
- Learn service-oriented architecture and authentication concepts.

## React labs

The React practice projects are located in `Week5_React/React` and include labs such as:

- `ReactJS-HOL-1` through `ReactJS-HOL-13`
- Event handling examples and UI state demos
- Conditional rendering and ticket booking examples

## Quick run notes

### Week 6: Angular Student Course Portal

```powershell
cd Week6_Angular/Angular_HandsOn/Shivani_Gupta/student-course-portal
npm install
npm start
```

Then open http://localhost:4200/.

### Week 4: MicroservicesArchitecture

```bash
cd Week4_Microservices_JWT/MicroservicesArchitecture
dotnet build
dotnet run --project MicroservicesArchitecture.csproj --urls http://127.0.0.1:5080
```

### Week 3: OpenAPI inspection utility

```powershell
cd Week3_ASPNETCore8_WebAPI/tmp_openapi_inspect
dotnet run --project tmp_openapi_inspect.csproj
```

### Week 5: React lab

```powershell
cd Week5_React/React/ReactJS-HOL-11
npm install
npm run dev
```

### Week 7: Git hands-on labs

```powershell
cd Week7_GIT
```

Open any of the hands-on folders such as `HandsOn_1` through `HandsOn_5` to follow the Git exercises.

## Notes

- Some .NET projects target `net10.0`, so a compatible SDK may be required.
- For Web API projects, check the console output for the exact local URL before calling endpoints.
- React labs are Vite-based and can be started locally with `npm install` followed by `npm run dev`.
- The Angular Student Course Portal includes an Output folder with screenshots and verification images for the hands-on milestones.
- A missing or unlisted week can be added here later if additional training content is introduced.
