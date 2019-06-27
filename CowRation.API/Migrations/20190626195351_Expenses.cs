using Microsoft.EntityFrameworkCore.Metadata;
using Microsoft.EntityFrameworkCore.Migrations;

namespace CowRation.API.Migrations
{
    public partial class Expenses : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropColumn(
                name: "Article",
                table: "Expenses");

            migrationBuilder.AddColumn<int>(
                name: "ExpendituresId",
                table: "Expenses",
                nullable: false,
                defaultValue: 0);

            migrationBuilder.CreateTable(
                name: "Expenditures",
                columns: table => new
                {
                    Id = table.Column<int>(nullable: false)
                        .Annotation("SqlServer:ValueGenerationStrategy", SqlServerValueGenerationStrategy.IdentityColumn),
                    Name = table.Column<string>(nullable: true)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_Expenditures", x => x.Id);
                });

            migrationBuilder.CreateIndex(
                name: "IX_Expenses_ExpendituresId",
                table: "Expenses",
                column: "ExpendituresId");

            migrationBuilder.AddForeignKey(
                name: "FK_Expenses_Expenditures_ExpendituresId",
                table: "Expenses",
                column: "ExpendituresId",
                principalTable: "Expenditures",
                principalColumn: "Id",
                onDelete: ReferentialAction.Cascade);
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropForeignKey(
                name: "FK_Expenses_Expenditures_ExpendituresId",
                table: "Expenses");

            migrationBuilder.DropTable(
                name: "Expenditures");

            migrationBuilder.DropIndex(
                name: "IX_Expenses_ExpendituresId",
                table: "Expenses");

            migrationBuilder.DropColumn(
                name: "ExpendituresId",
                table: "Expenses");

            migrationBuilder.AddColumn<string>(
                name: "Article",
                table: "Expenses",
                nullable: true);
        }
    }
}
