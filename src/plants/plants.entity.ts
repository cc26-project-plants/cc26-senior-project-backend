import { User } from "src/user/user.entity";
import { BaseEntity, Column, ManyToOne, PrimaryGeneratedColumn } from "typeorm";

export class Plants extends BaseEntity {
    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    plantName: string;

    @Column()
    photo: string;

    @ManyToOne(type => User, user => user.id)
    user: User; 
   
    //plantStats
};