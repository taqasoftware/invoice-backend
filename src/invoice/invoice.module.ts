import { Module } from '@nestjs/common';
import { InvoiceService } from './invoice.service';
import { InvoiceController } from './invoice.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { InvoiceRepository } from './invoice.repository';
import { Invoice } from './entities/invoice.entity'; 
import { CostumerModule } from 'src/costumer/costumer.module';

@Module({
  controllers: [InvoiceController],
  providers: [InvoiceService,InvoiceRepository],
  imports: [TypeOrmModule.forFeature([Invoice]),CostumerModule],
})
export class InvoiceModule {}
