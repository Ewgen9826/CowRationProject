using Microsoft.EntityFrameworkCore.Migrations;

namespace CowRation.API.Migrations
{
    public partial class AddFoodValue : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropColumn(
                name: "Id",
                table: "KormStorage");
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.AddColumn<int>(
                name: "Id",
                table: "KormStorage",
                nullable: false,
                defaultValue: 0);
        }
    }
}
