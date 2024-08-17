import { Column, CreateDateColumn, DeleteDateColumn, Entity, PrimaryGeneratedColumn, UpdateDateColumn } from "typeorm";

export type GenderType = "m" | "f" | "o"

@Entity({ name: "users" })
export class Users {
    @PrimaryGeneratedColumn("uuid")
    id: string;

    @Column({ nullable: false })
    first_name: string;

    @Column({ nullable: false })
    last_name: string;

    @Column({type: "enum", enum: ["m", "f", "o"]})
    gender: GenderType;

    @Column({ nullable: false })
    role: string;

    @Column({ nullable: false, unique: true })
    email?: string;

    @Column({ nullable: true })
    phone?: string;

    @Column({ nullable: true })
    password?: string;

    @CreateDateColumn()
    created_at: Date;

    @UpdateDateColumn()
    updated_at: Date;

    @DeleteDateColumn()
    deleted_at: Date
}