using SuncoastDevelopersGym.Models;
using SuncoastDevelopersGym.ViewModel;

namespace SuncoastDevelopersGym.Service
{
  public class MockAuthService : IAuthService
  {
    public AuthData CreateAuthData(User user)
    {
      return new AuthData
      {
        Token = "123-abc",
        TokenExpirationTime = 1234,
        User = new User
        {
          Email = "jane@smith.com"
        }
      };
    }

    public string HashPassword(User elephant, string passwordToHash)
    {
      return elephant.FullName + "-" + passwordToHash;
    }

    public bool VerifyPassword(User user, string providedPassword)
    {
      return true;
    }
  }
}