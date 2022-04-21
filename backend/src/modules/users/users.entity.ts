import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity('users')
export class UsersEntity {
  @PrimaryGeneratedColumn('uuid')
  public id: number;

  @Column()
  public lastname: string;

  @Column()
  public firstname: string;

  @Column({ unique: true })
  public email: string;

  @Column()
  public password: string;
}
