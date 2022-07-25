import { Injectable } from '@nestjs/common';
import { Invoice } from 'src/invoice/entities/invoice.entity';
import { InvoiceRepository } from 'src/invoice/invoice.repository';
import { InvoiceService } from 'src/invoice/invoice.service';
import { DeleteResult } from 'typeorm';
import { CostumerRepository } from './costumer.repository';
import { CreateCostumerDto } from './dto/create-costumer.dto';
import { CreateWithPhoneNumberDto } from './dto/create-with-phoneNumber.dto';
import { UpdateCostumerDto } from './dto/update-costumer.dto';
import { Costumer } from './entities/costumer.entity';

@Injectable()
export class CostumerService {
  constructor(private readonly costumerRepository: CostumerRepository,private invoiceService:InvoiceRepository) {}

  async create(createCostumerDto: CreateCostumerDto): Promise<Costumer> {
    
    const costumer:Costumer = await this.costumerRepository.createCostumer(createCostumerDto);

    const invoice:Invoice = await this.invoiceService.createInvoice({costumer_id:costumer.id,invoice_number:createCostumerDto.invoice_number});

    return costumer;
  }

  findAll(): Promise<Costumer[]> {
    return this.costumerRepository.findAll();
  }

  findOne(id: number): Promise<Costumer> {
    return this.costumerRepository.findOneCostumer(id);
  }

  update(id: number, updateCostumerDto: UpdateCostumerDto): Promise<Costumer> {
    return this.costumerRepository.updateCostumer(id, updateCostumerDto);
  }

  remove(id: number): Promise<DeleteResult> {
    return this.costumerRepository.deleteCostumer(id);
  }

  async findByPhoneNumber(createWithPhoneNumberDto: CreateWithPhoneNumberDto): Promise<Costumer> {
    
    const {invoice_number} = createWithPhoneNumberDto;
    const costumer:Costumer =  await this.costumerRepository.findByPhoneNumber(createWithPhoneNumberDto.phone_number);
 
 
    const invoice:Invoice = await this.invoiceService.createInvoice({costumer_id:costumer.id,invoice_number:invoice_number})
    return costumer;
  }

}
 