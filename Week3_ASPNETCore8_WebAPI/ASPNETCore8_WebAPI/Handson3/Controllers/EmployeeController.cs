using Handson3.Filters;
using Handson3.Models;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc;

namespace Handson3.Controllers
{
    [ApiController]
    [Route("api/[controller]")]
    [CustomAuthFilter]
    [ServiceFilter(typeof(CustomExceptionFilter))]
    public class EmployeeController : ControllerBase
    {
        private static readonly List<Employee> Employees = new()
        {
            new Employee
            {
                Id = 1,
                Name = "Alice",
                Salary = 50000,
                Permanent = true,
                Department = new Department { Id = 1, Name = "HR" },
                Skills = new List<Skill>
                {
                    new Skill { Id = 1, Name = "Communication" },
                    new Skill { Id = 2, Name = "Teamwork" }
                },
                DateOfBirth = new DateTime(1990, 1, 15)
            },
            new Employee
            {
                Id = 2,
                Name = "Bob",
                Salary = 60000,
                Permanent = false,
                Department = new Department { Id = 2, Name = "IT" },
                Skills = new List<Skill>
                {
                    new Skill { Id = 3, Name = "C#" },
                    new Skill { Id = 4, Name = "ASP.NET" }
                },
                DateOfBirth = new DateTime(1988, 7, 22)
            }
        };

        [HttpGet]
        [AllowAnonymous]
        [ProducesResponseType(StatusCodes.Status200OK)]
        [ProducesResponseType(StatusCodes.Status500InternalServerError)]
        public ActionResult<List<Employee>> Get()
        {
            throw new InvalidOperationException("This is a test exception from GET action.");
            return Ok(GetStandardEmployeeList());
        }

        [HttpGet("{id:int}")]
        [ProducesResponseType(StatusCodes.Status200OK)]
        [ProducesResponseType(StatusCodes.Status404NotFound)]
        public ActionResult<Employee> Get(int id)
        {
            var employee = Employees.FirstOrDefault(e => e.Id == id);
            return employee is null ? NotFound() : Ok(employee);
        }

        [HttpPost]
        [ProducesResponseType(StatusCodes.Status201Created)]
        [ProducesResponseType(StatusCodes.Status400BadRequest)]
        public ActionResult<Employee> Post([FromBody] Employee employee)
        {
            if (employee is null || string.IsNullOrWhiteSpace(employee.Name))
            {
                return BadRequest("Employee data is invalid.");
            }

            employee.Id = Employees.Max(e => e.Id) + 1;
            Employees.Add(employee);
            return CreatedAtAction(nameof(Get), new { id = employee.Id }, employee);
        }

        [HttpPut("{id:int}")]
        [ProducesResponseType(StatusCodes.Status200OK)]
        [ProducesResponseType(StatusCodes.Status400BadRequest)]
        [ProducesResponseType(StatusCodes.Status404NotFound)]
        public IActionResult Put(int id, [FromBody] Employee employee)
        {
            var existing = Employees.FirstOrDefault(e => e.Id == id);
            if (existing is null)
            {
                return NotFound();
            }

            if (employee is null || string.IsNullOrWhiteSpace(employee.Name))
            {
                return BadRequest("Employee data is invalid.");
            }

            existing.Name = employee.Name;
            existing.Salary = employee.Salary;
            existing.Permanent = employee.Permanent;
            existing.Department = employee.Department;
            existing.Skills = employee.Skills;
            existing.DateOfBirth = employee.DateOfBirth;

            return Ok(existing);
        }

        private List<Employee> GetStandardEmployeeList()
        {
            return Employees;
        }
    }
}
