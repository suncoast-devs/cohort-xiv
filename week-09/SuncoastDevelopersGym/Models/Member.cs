using System;
using System.Collections.Generic;

namespace SuncoastDevelopersGym.Models
{
  public class Member
  {
    public int Id { get; set; }
    public string FirstName { get; set; }
    public string LastName { get; set; }

    public DateTime Birthday { get; set; }
    public DateTime DateJoined { get; set; } = DateTime.Now;
    public string EmergencyContactName { get; set; }
    public string EmergencyContactPhone { get; set; }
    public string MemberNumber { get; set; }
    public bool HasPaid { get; set; } = true;

    public List<MemberCheckIn> MemberCheckIns { get; set; } = new List<MemberCheckIn>();
  }
}