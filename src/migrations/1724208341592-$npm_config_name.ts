import { MigrationInterface, QueryRunner } from "typeorm";
import * as bcrypt from "bcrypt";

export class SeedSuperAdmin1724207699950 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        const hashedPassword = await bcrypt.hash('superadmin', 10);

        await queryRunner.manager.insert('users', [
            {
                first_name: 'Super',
                last_name: 'Admin',
                gender: 'm',  // Assuming 'm' for male; adjust if needed
                email: 'super@admin.com',
                phone: '123-456-7890',
                password: hashedPassword,
                is_active: true,
                created_at: new Date(),
                updated_at: new Date(),
                deleted_at: null,
                refresh_token: null,  // Adjust as needed
            }
        ]);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.manager.delete('users', {
            email: 'super@admin.com'
        });
    }
}
