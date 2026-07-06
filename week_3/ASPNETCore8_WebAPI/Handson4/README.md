# Handson4

## Objectives
- Demonstrate data create, update, and delete operations using Web API
- Use `[FromBody]` to bind JSON input to a custom model
- Update and delete hardcoded employee data
- Use Swagger and Postman to test the API

## Endpoints
- `GET /api/employee` - list all employees
- `GET /api/employee/{id}` - get employee by id
- `POST /api/employee` - add a new employee using JSON body
- `PUT /api/employee/{id}` - update employee data using JSON body
- `DELETE /api/employee/{id}` - delete employee by id

## Update rules
- If `id <= 0`, returns `400 Bad Request` with `Invalid employee id`
- If `id > 0` but not present in the list, returns `400 Bad Request` with `Invalid employee id`
- If valid, updates the hardcoded list using request body values and returns the updated employee
