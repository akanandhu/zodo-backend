import {
  BeforeInsert,
  Column,
  CreateDateColumn,
  DeleteDateColumn,
  Entity,
  JoinColumn,
  ManyToMany,
  OneToOne,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
} from 'typeorm';
import { Exclude } from 'class-transformer';
import bcrypt from 'bcrypt';
// import { Roles } from 'src/roles/entity/roles.entity';
export type GenderType = 'm' | 'f' | 'o';
import { Relation } from 'typeorm';
import { Doctors } from 'src/doctors/entity/doctors.entity';
import { forwardRef } from '@nestjs/common';

// @Entity({ name: 'users' })
@Entity()
export class Users {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column({ nullable: false })
  first_name: string;

  @Column({ nullable: false })
  last_name: string;

  @Column({ type: 'enum', enum: ['m', 'f', 'o'] })
  gender: GenderType;

  // @ManyToMany(() => Roles, (role) => role.name)
  // role: Relation<Roles[]>;

  @Column({ nullable: false, unique: true })
  email?: string;

  @Column({ nullable: true })
  phone?: string;

  @Column({ nullable: true })
  password?: string;

  @Column({ type: 'boolean' })
  is_active?: boolean;

  @Column({ nullable: true })
  @Exclude()
  refresh_token?: string;

  @CreateDateColumn()
  created_at: Date;

  @UpdateDateColumn()
  updated_at: Date;

  @DeleteDateColumn()
  deleted_at: Date;

  

  @BeforeInsert()
  async hashPass() {
    this.password = await bcrypt.hash(this.password, 10);
  }
}

@OneToOne(()=> forwardRef(() => Doctors), (doctor) => doctor.users)(Users.prototype, 'doctors');
