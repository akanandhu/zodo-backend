import { MigrationInterface, QueryRunner, TableColumn } from "typeorm";

export class UpdateHospitalCurrentColumn1725044209201 implements MigrationInterface {
    public async up(queryRunner: QueryRunner): Promise<void> {
        // Altering the "current" column to include the new statuses
        await queryRunner.changeColumn(
            "hospital",
            "current",
            new TableColumn({
                name: "current",
                type: "varchar",
                isNullable: false,
                default: "'pending'", // Default value set to "pending"
            })
        );
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        // Reverting the "current" column back to the original state (if necessary)
        await queryRunner.changeColumn(
            "hospital",
            "current",
            new TableColumn({
                name: "current",
                type: "varchar",
                isNullable: false,
                default: "'inactive'", // Revert default value to "inactive"
            })
        );
    }
}
