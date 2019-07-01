using System;

namespace SuncoastDevelopersGym.Models
{
  public class MemberCheckIn
  {
    public int Id { get; set; }
    public DateTime When { get; set; } = DateTime.Now;

    public int MemberId { get; set; }
    public Member Member { get; set; }

    // who checked in this member

    public int? UserId { get; set; }
    public User User { get; set; }
  }
}