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
    [Migration("20190503064830_RaltionKormUser")]
    partial class RaltionKormUser
    {
        protected override void BuildTargetModel(ModelBuilder modelBuilder)
        {
#pragma warning disable 612, 618
            modelBuilder
                .HasAnnotation("ProductVersion", "2.2.1-servicing-10028")
                .HasAnnotation("Relational:MaxIdentifierLength", 128)
                .HasAnnotation("SqlServer:ValueGenerationStrategy", SqlServerValueGenerationStrategy.IdentityColumn);

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

            modelBuilder.Entity("CowRation.API.Models.KormUser", b =>
                {
                    b.Property<int>("KormId");

                    b.Property<int>("UserId");

                    b.HasKey("KormId", "UserId");

                    b.HasIndex("UserId");

                    b.ToTable("KormUser");
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
#pragma warning restore 612, 618
        }
    }
}
