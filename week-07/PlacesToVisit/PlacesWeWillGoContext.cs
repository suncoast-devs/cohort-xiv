using System;
using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Metadata;

namespace PlacesToVisit
{
  public partial class PlacesWeWillGoContext : DbContext
  {
    public PlacesWeWillGoContext()
    {
    }

    public PlacesWeWillGoContext(DbContextOptions<PlacesWeWillGoContext> options)
        : base(options)
    {
    }

    protected override void OnConfiguring(DbContextOptionsBuilder optionsBuilder)
    {
      if (!optionsBuilder.IsConfigured)
      {
        optionsBuilder.UseNpgsql("server=localhost;database=PlacesWeWillGo");
      }
    }

    protected override void OnModelCreating(ModelBuilder modelBuilder)
    {
      modelBuilder.HasAnnotation("ProductVersion", "2.2.4-servicing-10062");
    }

    public DbSet<City> Cities { get; set; }

  }
}
