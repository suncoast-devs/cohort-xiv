using System;

namespace SuncoastDevelopersGym.Models
{
  public class User
  {
    public int Id { get; set; }

    public string UserName { get; set; }
    public string PasswordHash { get; set; }

    public string FullName { get; set; }
    public string Email { get; set; }

    public DateTime HiredDate { get; set; } = DateTime.Now;

  }
}