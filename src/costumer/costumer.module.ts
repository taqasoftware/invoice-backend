import { Module } from '@nestjs/common';
import { CostumerService } from './costumer.service';
import { CostumerController } from './costumer.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Costumer } from './entities/costumer.entity';
import { CostumerRepository } from './costumer.repository';

@Module({
  controllers: [CostumerController],
  providers: [CostumerService,CostumerRepository],
  imports:[TypeOrmModule.forFeature([Costumer])],
  exports:[CostumerService]
})
export class CostumerModule {}
