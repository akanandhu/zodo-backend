import { MigrationInterface, QueryRunner, TableColumn } from "typeorm";

export class CreateHospitalTable1725044209199 implements MigrationInterface {
    public async up(queryRunner: QueryRunner): Promise<void> {
        // Adding new columns
        await queryRunner.addColumns("hospital", [
            new TableColumn({
                name: "logo",
                type: "varchar",
                isNullable: true,
            }),
            new TableColumn({
                name: "billingAddress",
                type: "json",
                isNullable: false,
            }),
            new TableColumn({
                name: "website",
                type: "varchar",
                isNullable: true,
            }),
            new TableColumn({
                name: "email",
                type: "varchar",
                isNullable: true,
            }),
            new TableColumn({
                name: "isDisabled",
                type: "boolean",
                default: false,
            }),
            new TableColumn({
                name: "isDeactivated",
                type: "boolean",
                default: false,
            }),
            new TableColumn({
                name: "fastTag",
                type: "json",
                isNullable: true,
            }),
            new TableColumn({
                name: "documents",
                type: "json",
                isNullable: true,
            }),
        ]);

        // Altering existing columns
        await queryRunner.changeColumn(
            "hospital",
            "address",
            new TableColumn({
                name: "address",
                type: "json",
                isNullable: false,
            })
        );

        await queryRunner.changeColumn(
            "hospital",
            "admins",
            new TableColumn({
                name: "admins",
                type: "json",
                isNullable: true,
            })
        );

        await queryRunner.changeColumn(
            "hospital",
            "departments",
            new TableColumn({
                name: "departments",
                type: "json",
                isNullable: true,
            })
        );
    }
    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.dropTable("hospital");
    }
}
