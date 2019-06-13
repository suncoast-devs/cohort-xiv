namespace PlacesToVisit
{
  public class City
  {
    public int Id { get; set; }
    public string Name { get; set; }
    public string State { get; set; }
    public string Climate { get; set; }
    public int SizeInSquareMiles { get; set; }
    public float Elevation { get; set; }
    public int Population { get; set; }
    public bool Visited { get; set; } = false;
  }
}