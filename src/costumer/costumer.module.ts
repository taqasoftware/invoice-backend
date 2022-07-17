import { forwardRef, Module } from '@nestjs/common';
import { CostumerService } from './costumer.service';
import { CostumerController } from './costumer.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Costumer } from './entities/costumer.entity';
import { CostumerRepository } from './costumer.repository';
import { InvoiceModule } from 'src/invoice/invoice.module';

@Module({
  controllers: [CostumerController],
  providers: [CostumerService,CostumerRepository],
  imports:[TypeOrmModule.forFeature([Costumer]),forwardRef(() => InvoiceModule)],
  exports:[CostumerService]
})
export class CostumerModule {}
