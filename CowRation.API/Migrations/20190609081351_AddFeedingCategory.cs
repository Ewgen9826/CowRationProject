using Microsoft.EntityFrameworkCore.Migrations;

namespace CowRation.API.Migrations
{
    public partial class AddFeedingCategory : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropForeignKey(
                name: "FK_Users_FeedingCategories_FeedingCategoryId",
                table: "Users");

            migrationBuilder.DropIndex(
                name: "IX_Users_FeedingCategoryId",
                table: "Users");

            migrationBuilder.DropColumn(
                name: "FeedingCategoryId",
                table: "Users");

            migrationBuilder.DropColumn(
                name: "LaboratoryIndexFoodId",
                table: "Users");

            migrationBuilder.AddColumn<int>(
                name: "UserId",
                table: "FeedingCategories",
                nullable: false,
                defaultValue: 0);

            migrationBuilder.CreateIndex(
                name: "IX_FeedingCategories_UserId",
                table: "FeedingCategories",
                column: "UserId",
                unique: true);

            migrationBuilder.AddForeignKey(
                name: "FK_FeedingCategories_Users_UserId",
                table: "FeedingCategories",
                column: "UserId",
                principalTable: "Users",
                principalColumn: "Id",
                onDelete: ReferentialAction.Cascade);
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropForeignKey(
                name: "FK_FeedingCategories_Users_UserId",
                table: "FeedingCategories");

            migrationBuilder.DropIndex(
                name: "IX_FeedingCategories_UserId",
                table: "FeedingCategories");

            migrationBuilder.DropColumn(
                name: "UserId",
                table: "FeedingCategories");

            migrationBuilder.AddColumn<int>(
                name: "FeedingCategoryId",
                table: "Users",
                nullable: true);

            migrationBuilder.AddColumn<int>(
                name: "LaboratoryIndexFoodId",
                table: "Users",
                nullable: false,
                defaultValue: 0);

            migrationBuilder.CreateIndex(
                name: "IX_Users_FeedingCategoryId",
                table: "Users",
                column: "FeedingCategoryId");

            migrationBuilder.AddForeignKey(
                name: "FK_Users_FeedingCategories_FeedingCategoryId",
                table: "Users",
                column: "FeedingCategoryId",
                principalTable: "FeedingCategories",
                principalColumn: "Id",
                onDelete: ReferentialAction.Restrict);
        }
    }
}
