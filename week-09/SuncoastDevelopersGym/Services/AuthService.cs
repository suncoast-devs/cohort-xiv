using System;
using System.IdentityModel.Tokens.Jwt;
using System.Security.Claims;
using System.Text;
using Microsoft.AspNetCore.Identity;
using Microsoft.IdentityModel.Tokens;
using SuncoastDevelopersGym.Models;
using SuncoastDevelopersGym.ViewModel;

namespace SuncoastDevelopersGym.Service
{
  public class AuthService : IAuthService
  {
    private double jwtLifespan = 2592000;
    private string jwtSecret = "some really big random string";

    public AuthData CreateAuthData(User user)
    {
      var expirationTime = DateTime.UtcNow.AddSeconds(jwtLifespan);

      var tokenDescriptor = new SecurityTokenDescriptor
      {
        Subject = new ClaimsIdentity(new[]
        {
            new Claim(ClaimTypes.Name, user.UserName),
            new Claim("id", user.Id.ToString())
        }),
        Expires = expirationTime,
        // new SigningCredentials(signingKey, SecurityAlgorithms.HmacSha256Signature)
        SigningCredentials = new SigningCredentials(
              new SymmetricSecurityKey(Encoding.UTF8.GetBytes(jwtSecret)),
              SecurityAlgorithms.HmacSha256Signature
          )
      };
      var tokenHandler = new JwtSecurityTokenHandler();
      var token = tokenHandler.WriteToken(tokenHandler.CreateToken(tokenDescriptor));

      return new AuthData
      {
        Token = token,
        TokenExpirationTime = ((DateTimeOffset)expirationTime).ToUnixTimeSeconds(),
        Id = user.Id,
        User = user
      };
    }
    public string HashPassword(User elephant, string passwordToHash)
    {
      return new PasswordHasher<User>().HashPassword(elephant, passwordToHash);
    }

    public bool VerifyPassword(User user, string providedPassword)
    {
      return new PasswordHasher<User>().VerifyHashedPassword(user, user.PasswordHash, providedPassword) == PasswordVerificationResult.Success;
    }
  }
}