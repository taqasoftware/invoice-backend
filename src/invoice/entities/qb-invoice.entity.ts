import { Costumer } from "src/costumer/entities/costumer.entity";
import { AfterLoad, Column, Entity, JoinColumn, OneToMany, PrimaryColumn, PrimaryGeneratedColumn } from "typeorm";



@Entity('tblqb')
export class Qb {

    @PrimaryGeneratedColumn()
    id:number

    @Column()
    invo:string;

    @Column({type:'double'})
    invvalue:number
    

}
