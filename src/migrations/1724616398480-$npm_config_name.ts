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
                    name: 'specilisation',
                    type: 'varchar',
                    isNullable: true,
                },
                {
                    name: 'is_online',
                    type: 'boolean',
                    isNullable: true,
                    default: true,
                }
            ],
        }));        
    }


    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.dropTable('doctors');
    }

}
