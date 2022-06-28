import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import {  DeleteResult, EntityManager, Repository } from 'typeorm';
import { CreateInvoiceDto } from './dto/create-invoice.dto';
import { UpdateInvoiceDto } from './dto/update-invoice.dto';
import { Invoice } from './entities/invoice.entity';

@Injectable()
export class InvoiceRepository {
  constructor(
    @InjectRepository(Invoice)
    private invoice: Repository<Invoice>,
  ) {}

  async createInvoice(createInvoiceDto: CreateInvoiceDto, costumer_id: number) {
     
    const result = new Invoice();
    result.invoice_number = createInvoiceDto.invoice_number.toString();
    result.costumer_id = costumer_id;
    result.price = 1000
    return await this.invoice.save(result);
    
  }

  async findAll(): Promise<Invoice[]> {
    return await this.invoice.find();
  }

  async findOne(id: number): Promise<Invoice> {
    const invoice:Invoice =  await this.invoice.findOne({where:{id}});
    if(!invoice) {
        throw new NotFoundException('Invoice not found');
        }
        return invoice;
  }

    async update(id: number, updateInvoiceDto: UpdateInvoiceDto): Promise<Invoice> {
   
    const invoice: Invoice = await this.findOne(id);
    const newInvoice :Invoice = Object.assign(invoice, updateInvoiceDto);
    return this.invoice.save(newInvoice);
    
    }

    async remove(id: number): Promise<DeleteResult> {
        return this.remove(id);
    }


}
