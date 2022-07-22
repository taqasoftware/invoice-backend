import { BadRequestException, Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { DeleteResult, EntityManager, Repository } from 'typeorm';
import { CreateInvoiceDto } from './dto/create-invoice.dto';
import { UpdateInvoiceDto } from './dto/update-invoice.dto';
import { Invoice } from './entities/invoice.entity';
import { Qb } from './entities/qb-invoice.entity';

@Injectable()
export class InvoiceRepository {
  constructor(
    @InjectRepository(Invoice)
    private invoice: Repository<Invoice>,
    @InjectRepository(Qb)
    private qb :Repository<Qb>
  ) {}

  async createInvoice(createInvoiceDto: CreateInvoiceDto) {
    const invoice = new Invoice();
    const qbInvoice = await this.qb.findOne({where:{invNo:createInvoiceDto.invoice_number}});
    if(!qbInvoice){
      throw new NotFoundException('Invoice Not Found');
    }
    invoice.invoice_number = createInvoiceDto.invoice_number.toString();
    invoice.costumer_id = createInvoiceDto.costumer_id;
    invoice.price = qbInvoice.invValue;
    
    return await this.invoice.save(invoice);
    
  }

  async findAll(): Promise<Invoice[]> {
    return await this.invoice.find();
  }

  async findOne(id: number): Promise<Invoice> {
    const invoice: Invoice = await this.invoice.findOne({ where: { id } });
    if (!invoice) {
      throw new NotFoundException('Invoice not found');
    }
    return invoice;
  }

  async update(
    id: number,
    updateInvoiceDto: UpdateInvoiceDto,
  ): Promise<Invoice> {
    const invoice: Invoice = await this.findOne(id);
    const newInvoice: Invoice = Object.assign(invoice, updateInvoiceDto);
    return this.invoice.save(newInvoice);
  }

  async remove(id: number): Promise<DeleteResult> {
    let deleted = await this.invoice.delete(id);
    if (deleted.affected === 0) {
      throw new NotFoundException('Invoice not found');
    }
    return deleted;
  }

async checkInvoices(){
  let count:number = await this.invoice.count({where:{paid:0}});
 
  if(count>0)throw new BadRequestException('the last discount did not used');
  return true;

}
}
