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

    @Column()
    card_number:string;
    @OneToMany(type => Invoice, invoice => invoice.costumer,{eager: true,onDelete: "CASCADE"})
    invoices:Invoice[]


}
