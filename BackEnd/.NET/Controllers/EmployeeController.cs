using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using EmployeeApi.Data;
using EmployeeApi.Models;

namespace EmployeeApi.Controllers
{
    [ApiController]
    [Route("api/[controller]")]
    public class EmployeeController : ControllerBase
    {
        private readonly AppDbContext _context;

        public EmployeeController(AppDbContext context)
        {
            _context = context;
        }

        // GET: api/Employee
        [HttpGet]
        public async Task<ActionResult<IEnumerable<Employee>>> GetAll()
        {
            try
            {
                var employees = await _context.Employees
                    .Include(e => e.Department)
                    .ToListAsync();

                return Ok(employees);
            }
            catch (Exception ex)
            {
                return StatusCode(500, new { message = "Failed to fetch employees", error = ex.Message });
            }
        }

        // GET: api/Employee/5
        [HttpGet("{id}")]
        public async Task<ActionResult<Employee>> Get(long id)
        {
            try
            {
                var employee = await _context.Employees
                    .Include(e => e.Department)
                    .FirstOrDefaultAsync(e => e.EmployeeId == id);

                if (employee == null)
                    return NotFound(new { message = $"Employee with ID {id} not found." });

                return Ok(employee);
            }
            catch (Exception ex)
            {
                return StatusCode(500, new { message = "Failed to get employee", error = ex.Message });
            }
        }

        // POST: api/Employee
        [HttpPost]
        public async Task<ActionResult<Employee>> Post([FromBody] Employee employee)
        {
            if (!ModelState.IsValid)
                return BadRequest(ModelState);

            try
            {
                _context.Employees.Add(employee);
                await _context.SaveChangesAsync();

                return CreatedAtAction(nameof(Get), new { id = employee.EmployeeId }, employee);
            }
            catch (Exception ex)
            {
                return StatusCode(500, new { message = "Failed to create employee", error = ex.Message });
            }
        }

        // PUT: api/Employee/5
        [HttpPut("{id}")]
        public async Task<IActionResult> Put(long id, [FromBody] Employee updated)
        {
            if (!ModelState.IsValid)
                return BadRequest(ModelState);

            if (id != updated.EmployeeId)
                return BadRequest(new { message = "ID in URL does not match employee ID" });

            try
            {
                var existing = await _context.Employees.FirstOrDefaultAsync(e => e.EmployeeId == id);

                if (existing == null)
                    return NotFound(new { message = $"Employee with ID {id} not found." });

                existing.Name = updated.Name;
                existing.Email = updated.Email;
                existing.Phone = updated.Phone;
                existing.Salary = updated.Salary;
                existing.JobTitle = updated.JobTitle;
                existing.DepartmentId = updated.DepartmentId;

                await _context.SaveChangesAsync();
                return Ok(existing);
            }
            catch (Exception ex)
            {
                return StatusCode(500, new { message = "Failed to update employee", error = ex.Message });
            }
        }

        // DELETE: api/Employee/5
        [HttpDelete("{id}")]
        public async Task<IActionResult> Delete(long id)
        {
            try
            {
                var employee = await _context.Employees.FirstOrDefaultAsync(e => e.EmployeeId == id);

                if (employee == null)
                    return NotFound(new { message = $"Employee with ID {id} not found." });

                _context.Employees.Remove(employee);
                await _context.SaveChangesAsync();

                return NoContent();
            }
            catch (Exception ex)
            {
                return StatusCode(500, new { message = "Failed to delete employee", error = ex.Message });
            }
        }
    }
}
