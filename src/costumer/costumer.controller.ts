import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { CreateInvoiceDto } from 'src/invoice/dto/create-invoice.dto';
import { DeleteResult } from 'typeorm';
import { CostumerService } from './costumer.service';
import { CreateCostumerDto } from './dto/create-costumer.dto';
import { CreateWithPhoneNumberDto } from './dto/create-with-phoneNumber.dto';
import { UpdateCostumerDto } from './dto/update-costumer.dto';
import { Costumer } from './entities/costumer.entity';

@Controller('costumer')
export class CostumerController {
  constructor(private readonly costumerService: CostumerService) {}

  @Post()
  create(@Body() createCostumerDto: CreateCostumerDto): Promise<Costumer> {
    return this.costumerService.create(createCostumerDto);
  }

  @Get()
  findAll(): Promise<Costumer[]> {
    return this.costumerService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string): Promise<Costumer> {
    return this.costumerService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateCostumerDto: UpdateCostumerDto): Promise<Costumer> {
    return this.costumerService.update(+id, updateCostumerDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string): Promise<DeleteResult> {
    return this.costumerService.remove(+id);
  }

  @Post('/phone-number/')
  findByPhoneNumber(@Body() createWithPhoneNumberDto: CreateWithPhoneNumberDto): Promise<Costumer> {
    return this.costumerService.findByPhoneNumber(createWithPhoneNumberDto);
  }
}
