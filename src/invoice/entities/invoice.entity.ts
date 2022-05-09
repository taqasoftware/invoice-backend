import { Costumer } from "src/costumer/entities/costumer.entity";
import { Column, Entity, JoinColumn, OneToMany, PrimaryColumn } from "typeorm";



@Entity()
export class Invoice {

    @PrimaryColumn()
    id:number

    @Column()
    serial_number:string

    @Column()
    costumer_id:number

    @OneToMany(type => Costumer, costumer => costumer.invoices)
    @JoinColumn({name:'costumer_id'})
    costumer:Costumer[]

    

}
