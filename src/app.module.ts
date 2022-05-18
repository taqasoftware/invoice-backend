import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { typeOrmConfigAsync } from './config/typeorm.congif';
import { InvoiceModule } from './invoice/invoice.module';
import { CostumerModule } from './costumer/costumer.module'; 
 
@Module({
  imports: [InvoiceModule ,TypeOrmModule.forRootAsync(typeOrmConfigAsync), CostumerModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
