import { Injectable } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { IncomingMessage } from "http";
import { DataSource, EntityManager, Repository } from "typeorm";
import { Invoice } from "./entities/invoice.entity";

@Injectable()
export class InvoiceRepository  {

    constructor(
        @InjectRepository(Invoice)
        private invoice: Repository<Invoice>,
      ) {}
     
    async findAll():Promise<Invoice[]>{
        return await this.invoice.find();
    }


    // async create(invoice: Invoice):Promise<Invoice>{}
}