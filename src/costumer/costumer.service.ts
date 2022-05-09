import { Injectable } from '@nestjs/common';
import { DeleteResult } from 'typeorm';
import { CostumerRepository } from './costumer.repository';
import { CreateCostumerDto } from './dto/create-costumer.dto';
import { UpdateCostumerDto } from './dto/update-costumer.dto';
import { Costumer } from './entities/costumer.entity';

@Injectable()
export class CostumerService {
  constructor(private readonly costumerRepository: CostumerRepository) {}

  create(createCostumerDto: CreateCostumerDto): Promise<Costumer> {
    return this.costumerRepository.createCostumer(createCostumerDto);
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

  async findByPhoneNumber(phone_number: string): Promise<Costumer> {
    return await this.costumerRepository.findByPhoneNumber(phone_number);
  }

}
