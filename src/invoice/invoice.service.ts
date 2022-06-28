import { Injectable } from '@nestjs/common';
import { InjectConnection, InjectRepository } from '@nestjs/typeorm';
import { CostumerService } from 'src/costumer/costumer.service';
import { Costumer } from 'src/costumer/entities/costumer.entity';

import { CreateInvoiceDto } from './dto/create-invoice.dto';
import { UpdateInvoiceDto } from './dto/update-invoice.dto';
import { Invoice } from './entities/invoice.entity';
import { InvoiceRepository } from './invoice.repository';

@Injectable()
export class InvoiceService {

  constructor(
   private readonly invoiceRepository: InvoiceRepository,
   private readonly costumerService: CostumerService, 
  ) { }

  async   create(createInvoiceDto: CreateInvoiceDto): Promise<Invoice> {
    const {invoice_number, costumer_id} = createInvoiceDto;
     
      
      const costumer = await this.costumerService.findOne(costumer_id)
      console.log(costumer)
      return await this.invoiceRepository.createInvoice(createInvoiceDto, costumer.id);
  
  }

  findAll(): Promise<Invoice[]> {
    return this.invoiceRepository.findAll();
  }

  findOne(id: number): Promise<Invoice> {
    return this.invoiceRepository.findOne(id);
  }

  update(id: number, updateInvoiceDto: UpdateInvoiceDto): Promise<Invoice> {
    return this.invoiceRepository.update(id, updateInvoiceDto);
  }

  remove(id: number) {
    return this.invoiceRepository.remove(id);
  }
}
