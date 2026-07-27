using System.IdentityModel.Tokens.Jwt;
using System.Security.Claims;
using System.Text;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc;
using Microsoft.IdentityModel.Tokens;
using MicroservicesArchitecture.Models;

namespace MicroservicesArchitecture.Controllers;

[ApiController]
[Route("api/[controller]")]
public class AuthController : ControllerBase
{
    private readonly IConfiguration _configuration;

    public AuthController(IConfiguration configuration)
    {
        _configuration = configuration;
    }

    [HttpPost("login")]
    public IActionResult Login([FromBody] User model)
    {
        if (IsValidUser(model))
        {
            var token = GenerateJwtToken(model.Username);
            return Ok(new { token });
        }

        return Unauthorized(new { message = "Invalid username or password." });
    }

    [Authorize]
    [HttpGet("profile")]
    public IActionResult Profile()
    {
        var username = User.Identity?.Name ?? "unknown";
        return Ok(new { message = $"Hello, {username}! You are authenticated." });
    }

    private bool IsValidUser(User user)
        => user.Username == "admin" && user.Password == "password";

    private string GenerateJwtToken(string username)
    {
        var claims = new[]
        {
            new Claim(ClaimTypes.Name, username),
            new Claim(ClaimTypes.Role, "Admin")
        };

        var keyString = _configuration["Jwt:Key"] ?? "DefaultJwtKeyForDevelopmentOnlyWhichIsLongEnough123!";
        var keyBytes = System.Security.Cryptography.SHA256.HashData(Encoding.UTF8.GetBytes(keyString));
        var key = new SymmetricSecurityKey(keyBytes);
        var creds = new SigningCredentials(key, SecurityAlgorithms.HmacSha256);

        var token = new JwtSecurityToken(
            issuer: _configuration["Jwt:Issuer"],
            audience: _configuration["Jwt:Audience"],
            claims: claims,
            expires: DateTime.UtcNow.AddMinutes(double.Parse(_configuration["Jwt:DurationInMinutes"] ?? "60")),
            signingCredentials: creds);

        return new JwtSecurityTokenHandler().WriteToken(token);
    }
}
