// Doctors entity
import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";
@Entity({ name: "doctors" })
export class Doctors {
    @PrimaryGeneratedColumn("uuid")
    id: string;

    @Column({ nullable: true })
    specilisation?: string;

    @Column({ type: "boolean" })
    is_online?: boolean;
}