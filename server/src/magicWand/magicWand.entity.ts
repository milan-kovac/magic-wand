import { Column, CreateDateColumn, Entity, ManyToOne, PrimaryGeneratedColumn, UpdateDateColumn } from 'typeorm';
import { Wood } from './enums/wood.enum';
import { User } from 'src/user/user.entity';

@Entity()
export class MagicWand {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  flexibility: string;

  @ManyToOne(() => User, (user) => user.magicWands)
  owner: User;

  @Column()
  length: number;

  @Column({ type: 'enum', enum: Wood })
  wood: Wood;

  @CreateDateColumn()
  createdAt: Date;

  @UpdateDateColumn()
  updatedAt: Date;
}
