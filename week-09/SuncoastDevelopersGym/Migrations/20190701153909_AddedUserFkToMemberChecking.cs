using Microsoft.EntityFrameworkCore.Migrations;

namespace sdgreacttemplate.Migrations
{
    public partial class AddedUserFkToMemberChecking : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.AddColumn<int>(
                name: "UserId",
                table: "MemberCheckIns",
                nullable: true);

            migrationBuilder.CreateIndex(
                name: "IX_MemberCheckIns_UserId",
                table: "MemberCheckIns",
                column: "UserId");

            migrationBuilder.AddForeignKey(
                name: "FK_MemberCheckIns_Users_UserId",
                table: "MemberCheckIns",
                column: "UserId",
                principalTable: "Users",
                principalColumn: "Id",
                onDelete: ReferentialAction.Restrict);
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropForeignKey(
                name: "FK_MemberCheckIns_Users_UserId",
                table: "MemberCheckIns");

            migrationBuilder.DropIndex(
                name: "IX_MemberCheckIns_UserId",
                table: "MemberCheckIns");

            migrationBuilder.DropColumn(
                name: "UserId",
                table: "MemberCheckIns");
        }
    }
}
