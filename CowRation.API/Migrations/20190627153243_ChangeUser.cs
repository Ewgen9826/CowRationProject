using Microsoft.EntityFrameworkCore.Migrations;

namespace CowRation.API.Migrations
{
    public partial class ChangeUser : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.RenameColumn(
                name: "LastName",
                table: "Users",
                newName: "Email");

            migrationBuilder.RenameColumn(
                name: "FirstName",
                table: "Users",
                newName: "CompanyName");
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.RenameColumn(
                name: "Email",
                table: "Users",
                newName: "LastName");

            migrationBuilder.RenameColumn(
                name: "CompanyName",
                table: "Users",
                newName: "FirstName");
        }
    }
}
