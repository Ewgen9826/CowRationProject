using Microsoft.EntityFrameworkCore.Migrations;

namespace CowRation.API.Migrations
{
    public partial class UpdateStorage : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropForeignKey(
                name: "FK_Storages_Users_UserId",
                table: "Storages");

            migrationBuilder.DropIndex(
                name: "IX_Storages_UserId",
                table: "Storages");

            migrationBuilder.DropColumn(
                name: "UserId",
                table: "Storages");

            migrationBuilder.AddColumn<int>(
                name: "StorageId",
                table: "Users",
                nullable: false,
                defaultValue: 0);

            migrationBuilder.AlterColumn<double>(
                name: "Price",
                table: "Korms",
                nullable: false,
                oldClrType: typeof(decimal));

            migrationBuilder.CreateIndex(
                name: "IX_Users_StorageId",
                table: "Users",
                column: "StorageId");

            migrationBuilder.AddForeignKey(
                name: "FK_Users_Storages_StorageId",
                table: "Users",
                column: "StorageId",
                principalTable: "Storages",
                principalColumn: "Id",
                onDelete: ReferentialAction.Cascade);
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropForeignKey(
                name: "FK_Users_Storages_StorageId",
                table: "Users");

            migrationBuilder.DropIndex(
                name: "IX_Users_StorageId",
                table: "Users");

            migrationBuilder.DropColumn(
                name: "StorageId",
                table: "Users");

            migrationBuilder.AddColumn<int>(
                name: "UserId",
                table: "Storages",
                nullable: false,
                defaultValue: 0);

            migrationBuilder.AlterColumn<decimal>(
                name: "Price",
                table: "Korms",
                nullable: false,
                oldClrType: typeof(double));

            migrationBuilder.CreateIndex(
                name: "IX_Storages_UserId",
                table: "Storages",
                column: "UserId");

            migrationBuilder.AddForeignKey(
                name: "FK_Storages_Users_UserId",
                table: "Storages",
                column: "UserId",
                principalTable: "Users",
                principalColumn: "Id",
                onDelete: ReferentialAction.Cascade);
        }
    }
}
