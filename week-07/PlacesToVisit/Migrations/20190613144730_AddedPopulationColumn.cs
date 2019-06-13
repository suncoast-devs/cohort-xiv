using Microsoft.EntityFrameworkCore.Migrations;

namespace PlacesToVisit.Migrations
{
    public partial class AddedPopulationColumn : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.AddColumn<int>(
                name: "Population",
                table: "Cities",
                nullable: false,
                defaultValue: 0);
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropColumn(
                name: "Population",
                table: "Cities");
        }
    }
}
