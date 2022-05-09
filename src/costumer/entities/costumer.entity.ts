import { Invoice } from "src/invoice/entities/invoice.entity";
import { Entity, PrimaryGeneratedColumn ,Column, PrimaryColumn, OneToMany} from "typeorm";


@Entity()
export class Costumer {

    @PrimaryGeneratedColumn()
    id: number;

    @Column({type: "varchar", length: 100, nullable: false})
    full_name:string

    @Column({type: "varchar", length: 20, nullable: false,unique: true})
    phone_number:string

    @Column({type: "int", nullable: false, default: 0})
    points:number;

    @OneToMany(type => Invoice, invoice => invoice.costumer)
    invoices:Invoice[]


}
