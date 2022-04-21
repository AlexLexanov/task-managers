import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity('session')
export class SessionEntity {
  @PrimaryGeneratedColumn()
  public id: number;

  @Column({ unique: true })
  public email: string;

  @Column()
  public refresh_token: string;
}
