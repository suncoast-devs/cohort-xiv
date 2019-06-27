﻿// <auto-generated />
using System;
using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Infrastructure;
using Microsoft.EntityFrameworkCore.Storage.ValueConversion;
using Npgsql.EntityFrameworkCore.PostgreSQL.Metadata;
using suncoastdevelopersgym;

namespace sdgreacttemplate.Migrations
{
    [DbContext(typeof(DatabaseContext))]
    partial class DatabaseContextModelSnapshot : ModelSnapshot
    {
        protected override void BuildModel(ModelBuilder modelBuilder)
        {
#pragma warning disable 612, 618
            modelBuilder
                .HasAnnotation("Npgsql:ValueGenerationStrategy", NpgsqlValueGenerationStrategy.SerialColumn)
                .HasAnnotation("ProductVersion", "2.2.0-rtm-35687")
                .HasAnnotation("Relational:MaxIdentifierLength", 63);

            modelBuilder.Entity("SuncoastDevelopersGym.Models.Member", b =>
                {
                    b.Property<int>("Id")
                        .ValueGeneratedOnAdd();

                    b.Property<DateTime>("Birthday");

                    b.Property<DateTime>("DateJoined");

                    b.Property<string>("EmergencyContactName");

                    b.Property<string>("EmergencyContactPhone");

                    b.Property<string>("FirstName");

                    b.Property<bool>("HasPaid");

                    b.Property<string>("LastName");

                    b.Property<string>("MemberNumber");

                    b.HasKey("Id");

                    b.ToTable("Members");
                });

            modelBuilder.Entity("SuncoastDevelopersGym.Models.MemberCheckIn", b =>
                {
                    b.Property<int>("Id")
                        .ValueGeneratedOnAdd();

                    b.Property<int>("MemberId");

                    b.Property<DateTime>("When");

                    b.HasKey("Id");

                    b.HasIndex("MemberId");

                    b.ToTable("MemberCheckIns");
                });

            modelBuilder.Entity("SuncoastDevelopersGym.Models.User", b =>
                {
                    b.Property<int>("Id")
                        .ValueGeneratedOnAdd();

                    b.Property<string>("EmailMember");

                    b.Property<string>("FullName");

                    b.Property<DateTime>("HiredDate");

                    b.Property<string>("PasswordHash");

                    b.Property<string>("UserName");

                    b.HasKey("Id");

                    b.ToTable("Users");
                });

            modelBuilder.Entity("SuncoastDevelopersGym.Models.MemberCheckIn", b =>
                {
                    b.HasOne("SuncoastDevelopersGym.Models.Member", "Member")
                        .WithMany("MemberCheckIns")
                        .HasForeignKey("MemberId")
                        .OnDelete(DeleteBehavior.Cascade);
                });
#pragma warning restore 612, 618
        }
    }
}
