using SuncoastDevelopersGym.Models;

namespace SuncoastDevelopersGym.ViewModel
{
  public class AuthData
  {
    public string Token { get; set; }
    public long TokenExpirationTime { get; set; }
    public int Id { get; set; }
    public User User { get; set; }
  }
}