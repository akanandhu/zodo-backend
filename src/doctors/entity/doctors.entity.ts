// Doctors entity
import { forwardRef } from '@nestjs/common';
import { Users } from 'src/users/entity/users.entity';
import { Column, Entity, OneToOne, PrimaryGeneratedColumn } from 'typeorm';
@Entity()
export class Doctors {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column({ nullable: false })
  user_id?: string;

  @Column({ nullable: true })
  specilisation?: string;

  @Column({ type: 'boolean' })
  is_online?: boolean;

  
}

@OneToOne(()=> forwardRef(() => Users), (user) => user.doctors)(Doctors.prototype, 'users');
