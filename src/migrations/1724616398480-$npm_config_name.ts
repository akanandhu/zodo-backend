import { MigrationInterface, QueryRunner, Table } from "typeorm";

export class Migrations1724616398480 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.createTable(new Table({
            name: 'doctors',
            columns: [
                {
                    name: 'id',
                    type: 'uuid',
                    isPrimary: true,
                    generationStrategy: 'uuid',
                    default: 'uuid_generate_v4()',
                },
                {
                    name: 'first_name',
                    type: 'varchar',
                    isNullable: false,
                },
                {
                    name: 'last_name',
                    type: 'varchar',
                    isNullable: false,
                },
                {
                    name: 'gender',
                    type: 'enum',
                    enum: ['m', 'f', 'o'], // Enum values
                    isNullable: false,
                },
                {
                    name: 'email',
                    type: 'varchar',
                    isNullable: false,
                    isUnique: true,
                },
                {
                    name: 'phone',
                    type: 'varchar',
                    isNullable: true,
                },
                {
                    name: 'specilization',
                    type: 'varchar',
                    isNullable: true,
                },
                {
                    name: 'password',
                    type: 'varchar',
                    isNullable: true,
                },
                {
                    name: 'is_active',
                    type: 'boolean',
                    isNullable: true,
                    default: true,
                },
                {
                    name: 'doctor_type',
                    type: 'varchar',
                    isNullable: false,
                },
                {
                    name: 'refresh_token',
                    type: 'varchar',
                    isNullable: true,
                },
                {
                    name: 'created_at',
                    type: 'timestamp',
                    default: 'now()',
                },
                {
                    name: 'updated_at',
                    type: 'timestamp',
                    default: 'now()',
                },
                {
                    name: 'deleted_at',
                    type: 'timestamp',
                    isNullable: true,
                },
            ],
        }));


        await queryRunner.createTable(new Table({
            name: 'doctors_roles',
            columns: [
                {
                    name: 'doctor_id',
                    type: 'uuid',
                },
                {
                    name: 'role_id',
                    type: 'uuid',
                },
            ],
            foreignKeys: [
                {
                    columnNames: ['doctor_id'],
                    referencedTableName: 'doctors',
                    referencedColumnNames: ['id'],
                    onDelete: 'CASCADE',
                },
                {
                    columnNames: ['role_id'],
                    referencedTableName: 'roles',
                    referencedColumnNames: ['id'],
                    onDelete: 'CASCADE',
                },
            ],
        }));
        
    }


    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.dropTable('doctors');
    }

}
