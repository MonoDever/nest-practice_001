import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';
import { BaseEntity } from 'src/common/base-entity';

@Entity()
export class User extends BaseEntity {
    @PrimaryGeneratedColumn()
    id: number;

    @Column({ length: 500})
    username: string;

    @Column({ length: 500})
    firstname: string;

    @Column({ length: 500})
    lastname: string;

    @Column()
    active: boolean;
}