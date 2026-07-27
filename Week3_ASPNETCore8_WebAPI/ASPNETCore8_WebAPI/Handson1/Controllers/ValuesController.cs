using Microsoft.AspNetCore.Mvc;

namespace Handson1.Controllers
{
    [ApiController]
    [Route("api/[controller]")]
    public class ValuesController : ControllerBase
    {
        private static readonly List<string> Items = new()
        {
            "Value1",
            "Value2",
            "Value3"
        };

        [HttpGet]
        public ActionResult<IEnumerable<string>> Get()
        {
            return Ok(Items);
        }

        [HttpGet("{id:int}")]
        public ActionResult<string> Get(int id)
        {
            if (id < 0 || id >= Items.Count)
            {
                return NotFound($"Item with id {id} was not found.");
            }

            return Ok(Items[id]);
        }

        [HttpPost]
        public ActionResult<string> Post([FromBody] string value)
        {
            if (string.IsNullOrWhiteSpace(value))
            {
                return BadRequest("Value cannot be empty.");
            }

            Items.Add(value);
            var newId = Items.Count - 1;
            return CreatedAtAction(nameof(Get), new { id = newId }, value);
        }

        [HttpPut("{id:int}")]
        public IActionResult Put(int id, [FromBody] string value)
        {
            if (id < 0 || id >= Items.Count)
            {
                return NotFound($"Item with id {id} was not found.");
            }

            if (string.IsNullOrWhiteSpace(value))
            {
                return BadRequest("Value cannot be empty.");
            }

            Items[id] = value;
            return Ok(value);
        }

        [HttpDelete("{id:int}")]
        public IActionResult Delete(int id)
        {
            if (id < 0 || id >= Items.Count)
            {
                return NotFound($"Item with id {id} was not found.");
            }

            Items.RemoveAt(id);
            return NoContent();
        }
    }
}
