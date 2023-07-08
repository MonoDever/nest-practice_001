import { Column } from "typeorm";

export abstract class BaseEntity{
    @Column({ length: 500, nullable: true})
    createdBy: string;

    @Column({ nullable: true})
    createdDate: Date;

    @Column({ length: 500, nullable: true})
    updatedBy: string;

    @Column({ nullable: true})
    updatedDate: Date;
}