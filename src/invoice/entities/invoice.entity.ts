import { Costumer } from "src/costumer/entities/costumer.entity";
import { AfterLoad, Column, Entity, JoinColumn, OneToMany, PrimaryColumn, PrimaryGeneratedColumn } from "typeorm";



@Entity()
export class Invoice {

    @PrimaryGeneratedColumn()
    id:number

    @Column({unique:true})
    invoice_number:string

    @Column()
    costumer_id:number

    @OneToMany(type => Costumer, costumer => costumer.invoices)
    @JoinColumn({name:'costumer_id'})
    costumer:Costumer[]

    @Column({nullable:true})
    price:number;

    @Column({default:0})
    paid:number;


    points:number;

    @AfterLoad()
    getPoints(){
        this.points = this.price / 10 
    }
    

}
