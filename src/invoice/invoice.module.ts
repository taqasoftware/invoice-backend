import { Module } from '@nestjs/common';
import { InvoiceService } from './invoice.service';
import { InvoiceController } from './invoice.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { InvoiceRepository } from './invoice.repository';
import { Invoice } from './entities/invoice.entity'; 
import { CostumerModule } from 'src/costumer/costumer.module';
import { Qb } from './entities/qb-invoice.entity';

@Module({
  controllers: [InvoiceController],
  providers: [InvoiceService,InvoiceRepository],
  imports: [TypeOrmModule.forFeature([Invoice,Qb]),CostumerModule],
  exports: [InvoiceRepository]
})
export class InvoiceModule {}
