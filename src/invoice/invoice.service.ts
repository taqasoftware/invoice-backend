import { Injectable } from '@nestjs/common';
import { InjectConnection, InjectRepository } from '@nestjs/typeorm';
import { DataSource } from 'typeorm';
import { CreateInvoiceDto } from './dto/create-invoice.dto';
import { UpdateInvoiceDto } from './dto/update-invoice.dto';
import { InvoiceRepository } from './invoice.repository';

@Injectable()
export class InvoiceService {

  constructor(
   private readonly invoiceRepository: InvoiceRepository,
  ) { }

  create(createInvoiceDto: CreateInvoiceDto) {
    return 'This action adds a new invoice';
  }

  findAll() {
    return this.invoiceRepository.findAll();
  }

  findOne(id: number) {
    return `This action returns a #${id} invoice`;
  }

  update(id: number, updateInvoiceDto: UpdateInvoiceDto) {
    return `This action updates a #${id} invoice`;
  }

  remove(id: number) {
    return `This action removes a #${id} invoice`;
  }
}
