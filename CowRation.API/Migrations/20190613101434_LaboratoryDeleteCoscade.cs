using Microsoft.EntityFrameworkCore.Migrations;

namespace CowRation.API.Migrations
{
    public partial class LaboratoryDeleteCoscade : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropForeignKey(
                name: "FK_Laboratories_LaboratoryIndexFoods_LaboratoryIndexFoodId",
                table: "Laboratories");

            migrationBuilder.AlterColumn<int>(
                name: "LaboratoryIndexFoodId",
                table: "Laboratories",
                nullable: false,
                oldClrType: typeof(int),
                oldNullable: true);

            migrationBuilder.AddForeignKey(
                name: "FK_Laboratories_LaboratoryIndexFoods_LaboratoryIndexFoodId",
                table: "Laboratories",
                column: "LaboratoryIndexFoodId",
                principalTable: "LaboratoryIndexFoods",
                principalColumn: "Id",
                onDelete: ReferentialAction.Cascade);
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropForeignKey(
                name: "FK_Laboratories_LaboratoryIndexFoods_LaboratoryIndexFoodId",
                table: "Laboratories");

            migrationBuilder.AlterColumn<int>(
                name: "LaboratoryIndexFoodId",
                table: "Laboratories",
                nullable: true,
                oldClrType: typeof(int));

            migrationBuilder.AddForeignKey(
                name: "FK_Laboratories_LaboratoryIndexFoods_LaboratoryIndexFoodId",
                table: "Laboratories",
                column: "LaboratoryIndexFoodId",
                principalTable: "LaboratoryIndexFoods",
                principalColumn: "Id",
                onDelete: ReferentialAction.Restrict);
        }
    }
}
