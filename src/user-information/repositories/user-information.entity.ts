import { Entity,Column,PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class UserInformation{
    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    userId: number;

    @Column({length: 500,nullable: true})
    email: string;

    @Column({length: 500,nullable: true})
    address: string;
    
    @Column({length: 10,nullable: true})
    mobile: string;
}