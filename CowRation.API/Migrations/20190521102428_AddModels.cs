using Microsoft.EntityFrameworkCore.Metadata;
using Microsoft.EntityFrameworkCore.Migrations;

namespace CowRation.API.Migrations
{
    public partial class AddModels : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.CreateTable(
                name: "CatalogIndexFoods",
                columns: table => new
                {
                    Id = table.Column<int>(nullable: false)
                        .Annotation("SqlServer:ValueGenerationStrategy", SqlServerValueGenerationStrategy.IdentityColumn),
                    Name = table.Column<string>(nullable: true)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_CatalogIndexFoods", x => x.Id);
                });

            migrationBuilder.CreateTable(
                name: "RationResults",
                columns: table => new
                {
                    Id = table.Column<int>(nullable: false)
                        .Annotation("SqlServer:ValueGenerationStrategy", SqlServerValueGenerationStrategy.IdentityColumn),
                    Weight = table.Column<double>(nullable: false),
                    MilkCount = table.Column<double>(nullable: false),
                    Fat = table.Column<double>(nullable: false),
                    Protein = table.Column<double>(nullable: false),
                    UserId = table.Column<int>(nullable: true)
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

            migrationBuilder.CreateTable(
                name: "Storages",
                columns: table => new
                {
                    Id = table.Column<int>(nullable: false)
                        .Annotation("SqlServer:ValueGenerationStrategy", SqlServerValueGenerationStrategy.IdentityColumn),
                    FoodValue = table.Column<double>(nullable: false),
                    UserId = table.Column<int>(nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_Storages", x => x.Id);
                    table.ForeignKey(
                        name: "FK_Storages_Users_UserId",
                        column: x => x.UserId,
                        principalTable: "Users",
                        principalColumn: "Id",
                        onDelete: ReferentialAction.Cascade);
                });

            migrationBuilder.CreateTable(
                name: "CharacterizationIndexFoods",
                columns: table => new
                {
                    Id = table.Column<int>(nullable: false)
                        .Annotation("SqlServer:ValueGenerationStrategy", SqlServerValueGenerationStrategy.IdentityColumn),
                    Value = table.Column<double>(nullable: false),
                    CatalogIndexFoodId = table.Column<int>(nullable: false),
                    KormId = table.Column<int>(nullable: false),
                    UserId = table.Column<int>(nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_CharacterizationIndexFoods", x => x.Id);
                    table.ForeignKey(
                        name: "FK_CharacterizationIndexFoods_CatalogIndexFoods_CatalogIndexFoodId",
                        column: x => x.CatalogIndexFoodId,
                        principalTable: "CatalogIndexFoods",
                        principalColumn: "Id",
                        onDelete: ReferentialAction.Cascade);
                    table.ForeignKey(
                        name: "FK_CharacterizationIndexFoods_Korms_KormId",
                        column: x => x.KormId,
                        principalTable: "Korms",
                        principalColumn: "Id",
                        onDelete: ReferentialAction.Cascade);
                    table.ForeignKey(
                        name: "FK_CharacterizationIndexFoods_Users_UserId",
                        column: x => x.UserId,
                        principalTable: "Users",
                        principalColumn: "Id",
                        onDelete: ReferentialAction.Cascade);
                });

            migrationBuilder.CreateTable(
                name: "LaboratoryIndexFoods",
                columns: table => new
                {
                    Id = table.Column<int>(nullable: false)
                        .Annotation("SqlServer:ValueGenerationStrategy", SqlServerValueGenerationStrategy.IdentityColumn),
                    Value = table.Column<double>(nullable: false),
                    CatalogIndexFoodId = table.Column<int>(nullable: false),
                    UserId = table.Column<int>(nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_LaboratoryIndexFoods", x => x.Id);
                    table.ForeignKey(
                        name: "FK_LaboratoryIndexFoods_CatalogIndexFoods_CatalogIndexFoodId",
                        column: x => x.CatalogIndexFoodId,
                        principalTable: "CatalogIndexFoods",
                        principalColumn: "Id",
                        onDelete: ReferentialAction.Cascade);
                    table.ForeignKey(
                        name: "FK_LaboratoryIndexFoods_Users_UserId",
                        column: x => x.UserId,
                        principalTable: "Users",
                        principalColumn: "Id",
                        onDelete: ReferentialAction.Cascade);
                });

            migrationBuilder.CreateTable(
                name: "Rations",
                columns: table => new
                {
                    Id = table.Column<int>(nullable: false)
                        .Annotation("SqlServer:ValueGenerationStrategy", SqlServerValueGenerationStrategy.IdentityColumn),
                    Quantity = table.Column<double>(nullable: false),
                    RationId = table.Column<int>(nullable: false),
                    RationResultId = table.Column<int>(nullable: true)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_Rations", x => x.Id);
                    table.ForeignKey(
                        name: "FK_Rations_RationResults_RationResultId",
                        column: x => x.RationResultId,
                        principalTable: "RationResults",
                        principalColumn: "Id",
                        onDelete: ReferentialAction.Restrict);
                });

            migrationBuilder.CreateTable(
                name: "KormStorage",
                columns: table => new
                {
                    KormId = table.Column<int>(nullable: false),
                    StorageId = table.Column<int>(nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_KormStorage", x => new { x.KormId, x.StorageId });
                    table.ForeignKey(
                        name: "FK_KormStorage_Korms_KormId",
                        column: x => x.KormId,
                        principalTable: "Korms",
                        principalColumn: "Id",
                        onDelete: ReferentialAction.Cascade);
                    table.ForeignKey(
                        name: "FK_KormStorage_Storages_StorageId",
                        column: x => x.StorageId,
                        principalTable: "Storages",
                        principalColumn: "Id",
                        onDelete: ReferentialAction.Cascade);
                });

            migrationBuilder.CreateIndex(
                name: "IX_CharacterizationIndexFoods_CatalogIndexFoodId",
                table: "CharacterizationIndexFoods",
                column: "CatalogIndexFoodId");

            migrationBuilder.CreateIndex(
                name: "IX_CharacterizationIndexFoods_KormId",
                table: "CharacterizationIndexFoods",
                column: "KormId");

            migrationBuilder.CreateIndex(
                name: "IX_CharacterizationIndexFoods_UserId",
                table: "CharacterizationIndexFoods",
                column: "UserId");

            migrationBuilder.CreateIndex(
                name: "IX_KormStorage_StorageId",
                table: "KormStorage",
                column: "StorageId");

            migrationBuilder.CreateIndex(
                name: "IX_LaboratoryIndexFoods_CatalogIndexFoodId",
                table: "LaboratoryIndexFoods",
                column: "CatalogIndexFoodId");

            migrationBuilder.CreateIndex(
                name: "IX_LaboratoryIndexFoods_UserId",
                table: "LaboratoryIndexFoods",
                column: "UserId");

            migrationBuilder.CreateIndex(
                name: "IX_RationResults_UserId",
                table: "RationResults",
                column: "UserId");

            migrationBuilder.CreateIndex(
                name: "IX_Rations_RationResultId",
                table: "Rations",
                column: "RationResultId");

            migrationBuilder.CreateIndex(
                name: "IX_Storages_UserId",
                table: "Storages",
                column: "UserId");
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropTable(
                name: "CharacterizationIndexFoods");

            migrationBuilder.DropTable(
                name: "KormStorage");

            migrationBuilder.DropTable(
                name: "LaboratoryIndexFoods");

            migrationBuilder.DropTable(
                name: "Rations");

            migrationBuilder.DropTable(
                name: "Storages");

            migrationBuilder.DropTable(
                name: "CatalogIndexFoods");

            migrationBuilder.DropTable(
                name: "RationResults");
        }
    }
}
