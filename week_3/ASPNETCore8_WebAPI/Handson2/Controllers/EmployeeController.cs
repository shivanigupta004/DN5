using Microsoft.AspNetCore.Mvc;

namespace Handson2.Controllers
{
    [ApiController]
    [Route("api/emp")]
    public class EmployeeController : ControllerBase
    {
        private static readonly List<Employee> Employees = new()
        {
            new Employee { Id = 1, Name = "Alice", Department = "HR" },
            new Employee { Id = 2, Name = "Bob", Department = "IT" },
            new Employee { Id = 3, Name = "Charlie", Department = "Finance" }
        };

        [HttpGet]
        [ProducesResponseType(StatusCodes.Status200OK)]
        public ActionResult<IEnumerable<Employee>> Get()
        {
            return Ok(Employees);
        }

        [HttpGet("{id:int}")]
        [ActionName("GetEmployeeById")]
        [ProducesResponseType(StatusCodes.Status200OK)]
        [ProducesResponseType(StatusCodes.Status404NotFound)]
        public ActionResult<Employee> Get(int id)
        {
            var employee = Employees.FirstOrDefault(e => e.Id == id);
            if (employee is null)
            {
                return NotFound();
            }
            return Ok(employee);
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
            return CreatedAtAction("GetEmployeeById", new { id = employee.Id }, employee);
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
            existing.Department = employee.Department;
            return Ok(existing);
        }

        [HttpDelete("{id:int}")]
        [ProducesResponseType(StatusCodes.Status204NoContent)]
        [ProducesResponseType(StatusCodes.Status404NotFound)]
        public IActionResult Delete(int id)
        {
            var existing = Employees.FirstOrDefault(e => e.Id == id);
            if (existing is null)
            {
                return NotFound();
            }
            Employees.Remove(existing);
            return NoContent();
        }
    }

    public class Employee
    {
        public int Id { get; set; }
        public string? Name { get; set; }
        public string? Department { get; set; }
    }
}
