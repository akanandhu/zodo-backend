import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity({ name: "hospital" })
export class Hospital {
    @PrimaryGeneratedColumn("uuid")
    id: string;

    @Column({ nullable: false })
    name: string;

    @Column({ nullable: true })
    logo: string;


    @Column({ nullable: false })
    location: string;

    @Column("simple-json", { nullable: false })
    address: { lineOne: string; lineTwo: string; city: string; district: string; state: string }

    @Column("simple-json", { nullable: false })
    billingAddress: { lineOne: string; lineTwo: string; city: string; district: string; state: string }

    @Column({ nullable: true })
    website: string;

    @Column({ nullable: true })
    email: string;

    @Column("simple-json", { nullable: true })
    departments: string[];

    @Column({ nullable: false, default: "pending" })
    current: "active" | "pending" | "rejected";

    @Column({ type: "boolean", default: false })
    isDisabled: boolean;

    @Column({ type: "boolean", default: false })
    isDeactivated: boolean;

    @Column('simple-json', { nullable: true })
    fastTag: { enabled: boolean; count: number; price: number }

    @Column("simple-json", { nullable: true })
    admins: { name: string; role: string; email: string; password: string }

    @Column({ type: "uuid", nullable: true })
    parent_id: string | null;

    @Column("simple-json", { nullable: true })
    ratings: { userID: string, rating: number, submittedOn: Date }[];

    @Column("simple-json", { nullable: true })
    feedbacks: { userID: string; remark: string; submittedOn: Date }[];

    @Column("simple-json", { nullable: true })
    documents: Record<string, string>

}
