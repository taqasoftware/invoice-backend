import { Costumer } from "src/costumer/entities/costumer.entity";
import { AfterLoad, Column, Entity, JoinColumn, OneToMany, PrimaryColumn, PrimaryGeneratedColumn } from "typeorm";



@Entity('tblQB')
export class Qb {

    @PrimaryGeneratedColumn()
    id:number

    @Column()
    invNo:string

    @Column()
    invValue:number
    

}
