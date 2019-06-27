using Microsoft.EntityFrameworkCore.Metadata;
using Microsoft.EntityFrameworkCore.Migrations;

namespace CowRation.API.Migrations
{
    public partial class TaskTable : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropForeignKey(
                name: "FK_Rations_FeedingCategories_FeedingCategoryId",
                table: "Rations");

            migrationBuilder.RenameColumn(
                name: "FeedingCategoryId",
                table: "Rations",
                newName: "TaskId");

            migrationBuilder.RenameIndex(
                name: "IX_Rations_FeedingCategoryId",
                table: "Rations",
                newName: "IX_Rations_TaskId");

            migrationBuilder.CreateTable(
                name: "TaskRations",
                columns: table => new
                {
                    Id = table.Column<int>(nullable: false)
                        .Annotation("SqlServer:ValueGenerationStrategy", SqlServerValueGenerationStrategy.IdentityColumn),
                    UserId = table.Column<int>(nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_TaskRations", x => x.Id);
                    table.ForeignKey(
                        name: "FK_TaskRations_Users_UserId",
                        column: x => x.UserId,
                        principalTable: "Users",
                        principalColumn: "Id",
                        onDelete: ReferentialAction.Cascade);
                });

            migrationBuilder.CreateIndex(
                name: "IX_TaskRations_UserId",
                table: "TaskRations",
                column: "UserId");

            migrationBuilder.AddForeignKey(
                name: "FK_Rations_TaskRations_TaskId",
                table: "Rations",
                column: "TaskId",
                principalTable: "TaskRations",
                principalColumn: "Id",
                onDelete: ReferentialAction.Cascade);
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropForeignKey(
                name: "FK_Rations_TaskRations_TaskId",
                table: "Rations");

            migrationBuilder.DropTable(
                name: "TaskRations");

            migrationBuilder.RenameColumn(
                name: "TaskId",
                table: "Rations",
                newName: "FeedingCategoryId");

            migrationBuilder.RenameIndex(
                name: "IX_Rations_TaskId",
                table: "Rations",
                newName: "IX_Rations_FeedingCategoryId");

            migrationBuilder.AddForeignKey(
                name: "FK_Rations_FeedingCategories_FeedingCategoryId",
                table: "Rations",
                column: "FeedingCategoryId",
                principalTable: "FeedingCategories",
                principalColumn: "Id",
                onDelete: ReferentialAction.Cascade);
        }
    }
}
