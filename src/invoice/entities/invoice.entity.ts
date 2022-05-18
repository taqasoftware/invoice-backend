import { Costumer } from "src/costumer/entities/costumer.entity";
import { Column, Entity, JoinColumn, OneToMany, PrimaryColumn, PrimaryGeneratedColumn } from "typeorm";



@Entity()
export class Invoice {

    @PrimaryGeneratedColumn()
    id:number

    @Column()
    invoice_number:string

    @Column()
    costumer_id:number

    @OneToMany(type => Costumer, costumer => costumer.invoices)
    @JoinColumn({name:'costumer_id'})
    costumer:Costumer[]

    

}
