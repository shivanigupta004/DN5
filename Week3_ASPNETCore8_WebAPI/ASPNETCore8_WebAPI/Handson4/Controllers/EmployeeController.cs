using Handson4.Models;
using Microsoft.AspNetCore.Mvc;

namespace Handson4.Controllers
{
    [ApiController]
    [Route("api/[controller]")]
    public class EmployeeController : ControllerBase
    {
        private static readonly List<Employee> Employees = new()
        {
            new Employee { Id = 1, Name = "Alice", Department = "HR", Salary = 50000, Permanent = true },
            new Employee { Id = 2, Name = "Bob", Department = "IT", Salary = 60000, Permanent = false },
            new Employee { Id = 3, Name = "Charlie", Department = "Finance", Salary = 55000, Permanent = true }
        };

        [HttpGet]
        public ActionResult<List<Employee>> Get()
        {
            return Ok(Employees);
        }

        [HttpGet("{id:int}")]
        public ActionResult<Employee> GetById(int id)
        {
            var employee = Employees.FirstOrDefault(e => e.Id == id);
            return employee is null ? NotFound() : Ok(employee);
        }

        [HttpPost]
        public ActionResult<Employee> Post([FromBody] Employee employee)
        {
            if (employee is null || string.IsNullOrWhiteSpace(employee.Name))
            {
                return BadRequest("Employee data is invalid.");
            }

            employee.Id = Employees.Max(e => e.Id) + 1;
            Employees.Add(employee);
            return CreatedAtAction(nameof(GetById), new { id = employee.Id }, employee);
        }

        [HttpPut("{id:int}")]
        public ActionResult<Employee> Put(int id, [FromBody] Employee employee)
        {
            if (id <= 0)
            {
                return BadRequest("Invalid employee id");
            }

            var existing = Employees.FirstOrDefault(e => e.Id == id);
            if (existing is null)
            {
                return BadRequest("Invalid employee id");
            }

            if (employee is null || string.IsNullOrWhiteSpace(employee.Name))
            {
                return BadRequest("Employee data is invalid.");
            }

            existing.Name = employee.Name;
            existing.Department = employee.Department;
            existing.Salary = employee.Salary;
            existing.Permanent = employee.Permanent;

            return Ok(existing);
        }

        [HttpDelete("{id:int}")]
        public IActionResult Delete(int id)
        {
            if (id <= 0)
            {
                return BadRequest("Invalid employee id");
            }

            var existing = Employees.FirstOrDefault(e => e.Id == id);
            if (existing is null)
            {
                return BadRequest("Invalid employee id");
            }

            Employees.Remove(existing);
            return NoContent();
        }
    }
}
