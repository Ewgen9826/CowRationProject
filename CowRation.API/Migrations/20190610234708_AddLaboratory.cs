using Microsoft.EntityFrameworkCore.Migrations;

namespace CowRation.API.Migrations
{
    public partial class AddLaboratory : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropIndex(
                name: "IX_LaboratoryIndexFoods_UserId",
                table: "LaboratoryIndexFoods");

            migrationBuilder.DropColumn(
                name: "Value",
                table: "LaboratoryIndexFoods");

            migrationBuilder.CreateIndex(
                name: "IX_LaboratoryIndexFoods_UserId",
                table: "LaboratoryIndexFoods",
                column: "UserId");
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropIndex(
                name: "IX_LaboratoryIndexFoods_UserId",
                table: "LaboratoryIndexFoods");

            migrationBuilder.AddColumn<double>(
                name: "Value",
                table: "LaboratoryIndexFoods",
                nullable: false,
                defaultValue: 0.0);

            migrationBuilder.CreateIndex(
                name: "IX_LaboratoryIndexFoods_UserId",
                table: "LaboratoryIndexFoods",
                column: "UserId",
                unique: true);
        }
    }
}
