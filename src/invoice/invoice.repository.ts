import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { IncomingMessage } from 'http';
import { Costumer } from 'src/costumer/entities/costumer.entity';
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

  createInvoice(createInvoiceDto: CreateInvoiceDto, costumerId: number) {
    const { invoice_number } = createInvoiceDto;
    const invoice: Invoice = new Invoice();
    invoice.serial_number = invoice_number;
    invoice.costumer_id = costumerId;
    return this.invoice.save(invoice);
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
