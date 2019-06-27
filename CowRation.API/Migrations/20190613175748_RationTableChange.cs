using Microsoft.EntityFrameworkCore.Metadata;
using Microsoft.EntityFrameworkCore.Migrations;

namespace CowRation.API.Migrations
{
    public partial class RationTableChange : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropForeignKey(
                name: "FK_CharacterizationIndexFoods_Users_UserId",
                table: "CharacterizationIndexFoods");

            migrationBuilder.DropForeignKey(
                name: "FK_Rations_RationResults_RationResultId",
                table: "Rations");

            migrationBuilder.DropTable(
                name: "RationResults");

            migrationBuilder.DropIndex(
                name: "IX_Rations_RationResultId",
                table: "Rations");

            migrationBuilder.DropIndex(
                name: "IX_CharacterizationIndexFoods_UserId",
                table: "CharacterizationIndexFoods");

            migrationBuilder.DropColumn(
                name: "RationResultId",
                table: "Rations");

            migrationBuilder.DropColumn(
                name: "UserId",
                table: "CharacterizationIndexFoods");

            migrationBuilder.RenameColumn(
                name: "RationId",
                table: "Rations",
                newName: "KormId");

            migrationBuilder.RenameColumn(
                name: "Quantity",
                table: "Rations",
                newName: "Value");

            migrationBuilder.AddColumn<int>(
                name: "FeedingCategoryId",
                table: "Rations",
                nullable: false,
                defaultValue: 0);

            migrationBuilder.CreateIndex(
                name: "IX_Rations_FeedingCategoryId",
                table: "Rations",
                column: "FeedingCategoryId");

            migrationBuilder.CreateIndex(
                name: "IX_Rations_KormId",
                table: "Rations",
                column: "KormId");

            migrationBuilder.AddForeignKey(
                name: "FK_Rations_FeedingCategories_FeedingCategoryId",
                table: "Rations",
                column: "FeedingCategoryId",
                principalTable: "FeedingCategories",
                principalColumn: "Id",
                onDelete: ReferentialAction.Cascade);

            migrationBuilder.AddForeignKey(
                name: "FK_Rations_Korms_KormId",
                table: "Rations",
                column: "KormId",
                principalTable: "Korms",
                principalColumn: "Id",
                onDelete: ReferentialAction.Cascade);
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropForeignKey(
                name: "FK_Rations_FeedingCategories_FeedingCategoryId",
                table: "Rations");

            migrationBuilder.DropForeignKey(
                name: "FK_Rations_Korms_KormId",
                table: "Rations");

            migrationBuilder.DropIndex(
                name: "IX_Rations_FeedingCategoryId",
                table: "Rations");

            migrationBuilder.DropIndex(
                name: "IX_Rations_KormId",
                table: "Rations");

            migrationBuilder.DropColumn(
                name: "FeedingCategoryId",
                table: "Rations");

            migrationBuilder.RenameColumn(
                name: "Value",
                table: "Rations",
                newName: "Quantity");

            migrationBuilder.RenameColumn(
                name: "KormId",
                table: "Rations",
                newName: "RationId");

            migrationBuilder.AddColumn<int>(
                name: "RationResultId",
                table: "Rations",
                nullable: true);

            migrationBuilder.AddColumn<int>(
                name: "UserId",
                table: "CharacterizationIndexFoods",
                nullable: false,
                defaultValue: 0);

            migrationBuilder.CreateTable(
                name: "RationResults",
                columns: table => new
                {
                    Id = table.Column<int>(nullable: false)
                        .Annotation("SqlServer:ValueGenerationStrategy", SqlServerValueGenerationStrategy.IdentityColumn),
                    Fat = table.Column<double>(nullable: false),
                    MilkCount = table.Column<double>(nullable: false),
                    Protein = table.Column<double>(nullable: false),
                    UserId = table.Column<int>(nullable: true),
                    Weight = table.Column<double>(nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_RationResults", x => x.Id);
                    table.ForeignKey(
                        name: "FK_RationResults_Users_UserId",
                        column: x => x.UserId,
                        principalTable: "Users",
                        principalColumn: "Id",
                        onDelete: ReferentialAction.Restrict);
                });

            migrationBuilder.CreateIndex(
                name: "IX_Rations_RationResultId",
                table: "Rations",
                column: "RationResultId");

            migrationBuilder.CreateIndex(
                name: "IX_CharacterizationIndexFoods_UserId",
                table: "CharacterizationIndexFoods",
                column: "UserId");

            migrationBuilder.CreateIndex(
                name: "IX_RationResults_UserId",
                table: "RationResults",
                column: "UserId");

            migrationBuilder.AddForeignKey(
                name: "FK_CharacterizationIndexFoods_Users_UserId",
                table: "CharacterizationIndexFoods",
                column: "UserId",
                principalTable: "Users",
                principalColumn: "Id",
                onDelete: ReferentialAction.Cascade);

            migrationBuilder.AddForeignKey(
                name: "FK_Rations_RationResults_RationResultId",
                table: "Rations",
                column: "RationResultId",
                principalTable: "RationResults",
                principalColumn: "Id",
                onDelete: ReferentialAction.Restrict);
        }
    }
}
