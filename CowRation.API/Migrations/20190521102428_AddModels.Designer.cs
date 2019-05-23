﻿// <auto-generated />
using System;
using CowRation.API.Data;
using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Infrastructure;
using Microsoft.EntityFrameworkCore.Metadata;
using Microsoft.EntityFrameworkCore.Migrations;
using Microsoft.EntityFrameworkCore.Storage.ValueConversion;

namespace CowRation.API.Migrations
{
    [DbContext(typeof(DataContext))]
    [Migration("20190521102428_AddModels")]
    partial class AddModels
    {
        protected override void BuildTargetModel(ModelBuilder modelBuilder)
        {
#pragma warning disable 612, 618
            modelBuilder
                .HasAnnotation("ProductVersion", "2.2.1-servicing-10028")
                .HasAnnotation("Relational:MaxIdentifierLength", 128)
                .HasAnnotation("SqlServer:ValueGenerationStrategy", SqlServerValueGenerationStrategy.IdentityColumn);

            modelBuilder.Entity("CowRation.API.Models.CatalogIndexFood", b =>
                {
                    b.Property<int>("Id")
                        .ValueGeneratedOnAdd()
                        .HasAnnotation("SqlServer:ValueGenerationStrategy", SqlServerValueGenerationStrategy.IdentityColumn);

                    b.Property<string>("Name");

                    b.HasKey("Id");

                    b.ToTable("CatalogIndexFoods");
                });

            modelBuilder.Entity("CowRation.API.Models.CharacterizationIndexFood", b =>
                {
                    b.Property<int>("Id")
                        .ValueGeneratedOnAdd()
                        .HasAnnotation("SqlServer:ValueGenerationStrategy", SqlServerValueGenerationStrategy.IdentityColumn);

                    b.Property<int>("CatalogIndexFoodId");

                    b.Property<int>("KormId");

                    b.Property<int>("UserId");

                    b.Property<double>("Value");

                    b.HasKey("Id");

                    b.HasIndex("CatalogIndexFoodId");

                    b.HasIndex("KormId");

                    b.HasIndex("UserId");

                    b.ToTable("CharacterizationIndexFoods");
                });

            modelBuilder.Entity("CowRation.API.Models.Korm", b =>
                {
                    b.Property<int>("Id")
                        .ValueGeneratedOnAdd()
                        .HasAnnotation("SqlServer:ValueGenerationStrategy", SqlServerValueGenerationStrategy.IdentityColumn);

                    b.Property<string>("Name");

                    b.Property<decimal>("Price");

                    b.HasKey("Id");

                    b.ToTable("Korms");
                });

            modelBuilder.Entity("CowRation.API.Models.KormStorage", b =>
                {
                    b.Property<int>("KormId");

                    b.Property<int>("StorageId");

                    b.HasKey("KormId", "StorageId");

                    b.HasIndex("StorageId");

                    b.ToTable("KormStorage");
                });

            modelBuilder.Entity("CowRation.API.Models.KormUser", b =>
                {
                    b.Property<int>("KormId");

                    b.Property<int>("UserId");

                    b.HasKey("KormId", "UserId");

                    b.HasIndex("UserId");

                    b.ToTable("KormUser");
                });

            modelBuilder.Entity("CowRation.API.Models.LaboratoryIndexFood", b =>
                {
                    b.Property<int>("Id")
                        .ValueGeneratedOnAdd()
                        .HasAnnotation("SqlServer:ValueGenerationStrategy", SqlServerValueGenerationStrategy.IdentityColumn);

                    b.Property<int>("CatalogIndexFoodId");

                    b.Property<int>("UserId");

                    b.Property<double>("Value");

                    b.HasKey("Id");

                    b.HasIndex("CatalogIndexFoodId");

                    b.HasIndex("UserId");

                    b.ToTable("LaboratoryIndexFoods");
                });

            modelBuilder.Entity("CowRation.API.Models.Ration", b =>
                {
                    b.Property<int>("Id")
                        .ValueGeneratedOnAdd()
                        .HasAnnotation("SqlServer:ValueGenerationStrategy", SqlServerValueGenerationStrategy.IdentityColumn);

                    b.Property<double>("Quantity");

                    b.Property<int>("RationId");

                    b.Property<int?>("RationResultId");

                    b.HasKey("Id");

                    b.HasIndex("RationResultId");

                    b.ToTable("Rations");
                });

            modelBuilder.Entity("CowRation.API.Models.RationResult", b =>
                {
                    b.Property<int>("Id")
                        .ValueGeneratedOnAdd()
                        .HasAnnotation("SqlServer:ValueGenerationStrategy", SqlServerValueGenerationStrategy.IdentityColumn);

                    b.Property<double>("Fat");

                    b.Property<double>("MilkCount");

                    b.Property<double>("Protein");

                    b.Property<int?>("UserId");

                    b.Property<double>("Weight");

                    b.HasKey("Id");

                    b.HasIndex("UserId");

                    b.ToTable("RationResults");
                });

            modelBuilder.Entity("CowRation.API.Models.Storage", b =>
                {
                    b.Property<int>("Id")
                        .ValueGeneratedOnAdd()
                        .HasAnnotation("SqlServer:ValueGenerationStrategy", SqlServerValueGenerationStrategy.IdentityColumn);

                    b.Property<double>("FoodValue");

                    b.Property<int>("UserId");

                    b.HasKey("Id");

                    b.HasIndex("UserId");

                    b.ToTable("Storages");
                });

            modelBuilder.Entity("CowRation.API.Models.User", b =>
                {
                    b.Property<int>("Id")
                        .ValueGeneratedOnAdd()
                        .HasAnnotation("SqlServer:ValueGenerationStrategy", SqlServerValueGenerationStrategy.IdentityColumn);

                    b.Property<string>("FirstName");

                    b.Property<string>("LastName");

                    b.Property<byte[]>("PasswordHash");

                    b.Property<byte[]>("PasswordSalt");

                    b.Property<string>("UserName");

                    b.HasKey("Id");

                    b.ToTable("Users");
                });

            modelBuilder.Entity("CowRation.API.Models.CharacterizationIndexFood", b =>
                {
                    b.HasOne("CowRation.API.Models.CatalogIndexFood", "CatalogIndexFood")
                        .WithMany()
                        .HasForeignKey("CatalogIndexFoodId")
                        .OnDelete(DeleteBehavior.Cascade);

                    b.HasOne("CowRation.API.Models.Korm", "Korm")
                        .WithMany()
                        .HasForeignKey("KormId")
                        .OnDelete(DeleteBehavior.Cascade);

                    b.HasOne("CowRation.API.Models.User", "User")
                        .WithMany()
                        .HasForeignKey("UserId")
                        .OnDelete(DeleteBehavior.Cascade);
                });

            modelBuilder.Entity("CowRation.API.Models.KormStorage", b =>
                {
                    b.HasOne("CowRation.API.Models.Korm", "Korm")
                        .WithMany("Storages")
                        .HasForeignKey("KormId")
                        .OnDelete(DeleteBehavior.Cascade);

                    b.HasOne("CowRation.API.Models.Storage", "Storage")
                        .WithMany("Korms")
                        .HasForeignKey("StorageId")
                        .OnDelete(DeleteBehavior.Cascade);
                });

            modelBuilder.Entity("CowRation.API.Models.KormUser", b =>
                {
                    b.HasOne("CowRation.API.Models.Korm", "Korm")
                        .WithMany("Users")
                        .HasForeignKey("KormId")
                        .OnDelete(DeleteBehavior.Cascade);

                    b.HasOne("CowRation.API.Models.User", "User")
                        .WithMany("Korms")
                        .HasForeignKey("UserId")
                        .OnDelete(DeleteBehavior.Cascade);
                });

            modelBuilder.Entity("CowRation.API.Models.LaboratoryIndexFood", b =>
                {
                    b.HasOne("CowRation.API.Models.CatalogIndexFood", "GetCatalogIndexFood")
                        .WithMany()
                        .HasForeignKey("CatalogIndexFoodId")
                        .OnDelete(DeleteBehavior.Cascade);

                    b.HasOne("CowRation.API.Models.User", "User")
                        .WithMany()
                        .HasForeignKey("UserId")
                        .OnDelete(DeleteBehavior.Cascade);
                });

            modelBuilder.Entity("CowRation.API.Models.Ration", b =>
                {
                    b.HasOne("CowRation.API.Models.RationResult", "RationResult")
                        .WithMany("Rations")
                        .HasForeignKey("RationResultId");
                });

            modelBuilder.Entity("CowRation.API.Models.RationResult", b =>
                {
                    b.HasOne("CowRation.API.Models.User")
                        .WithMany("RationResults")
                        .HasForeignKey("UserId");
                });

            modelBuilder.Entity("CowRation.API.Models.Storage", b =>
                {
                    b.HasOne("CowRation.API.Models.User", "User")
                        .WithMany()
                        .HasForeignKey("UserId")
                        .OnDelete(DeleteBehavior.Cascade);
                });
#pragma warning restore 612, 618
        }
    }
}