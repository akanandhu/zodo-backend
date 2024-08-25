import { Exclude } from "class-transformer";
import { Roles } from "src/roles/entity/roles.entity";
import { BeforeInsert, Column, CreateDateColumn, DeleteDateColumn, Entity, ManyToMany, PrimaryGeneratedColumn, Relation, UpdateDateColumn } from "typeorm";
import bcrypt from "bcrypt"
import { GenderType } from "src/users/entity/users.entity";
@Entity({ name: "doctors" })
export class Doctors {
    @PrimaryGeneratedColumn("uuid")
    id: string;

    @Column({ nullable: false })
    first_name: string;

    @Column({ nullable: false })
    last_name: string;

    @Column({ type: "enum", enum: ["m", "f", "o"] })
    gender: GenderType;

    @ManyToMany(() => Roles, (role) => role.name)
    role: Relation<Roles[]>;

    @Column({ nullable: false, unique: true })
    email?: string;

    @Column({ nullable: true })
    phone?: string;

    @Column({ nullable: true })
    specilization?: string;

    @Column({ nullable: true })
    password?: string;

    @Column({ type: "boolean" })
    is_active?: boolean;

    @Column({ nullable: false })
    doctor_type?: string;

    @Column({ nullable: true })
    @Exclude()
    refresh_token?: string;

    @CreateDateColumn()
    created_at: Date;

    @UpdateDateColumn()
    updated_at: Date;

    @DeleteDateColumn()
    deleted_at: Date

    @BeforeInsert()
    async hashPass() {
        this.password = await bcrypt.hash(this.password, 10)
    }

}