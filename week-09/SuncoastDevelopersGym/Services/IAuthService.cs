using SuncoastDevelopersGym.Models;
using SuncoastDevelopersGym.ViewModel;

namespace SuncoastDevelopersGym.Service
{
  public interface IAuthService
  {
    AuthData CreateAuthData(User user);
    string HashPassword(User elephant, string passwordToHash);
    bool VerifyPassword(User user, string providedPassword);

  }
}