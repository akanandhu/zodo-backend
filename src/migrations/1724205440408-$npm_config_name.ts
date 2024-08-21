import { MigrationInterface, QueryRunner } from "typeorm";

export class AddRefreshTokenToUsers1684356582010 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`
            ALTER TABLE "users" 
            ADD "refresh_token" character varying;
        `);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`
            ALTER TABLE "users" 
            DROP COLUMN "refresh_token";
        `);
    }

}
