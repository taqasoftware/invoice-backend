import { BadRequestException, Injectable, NotFoundException } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { query } from "express";
import { DeleteResult, Repository } from "typeorm";
import { CreateCostumerDto } from "./dto/create-costumer.dto";
import { UpdateCostumerDto } from "./dto/update-costumer.dto";
import { Costumer } from "./entities/costumer.entity";


@Injectable()
export class CostumerRepository {
    constructor(
        @InjectRepository(Costumer)
        private readonly costumerRepository: Repository<Costumer>
    ) { }


    async createCostumer(createCostumerDto: CreateCostumerDto): Promise<Costumer> {
        const { phone_number ,full_name } = createCostumerDto;
        const costumer :Costumer = new Costumer();
        costumer.phone_number = phone_number;
        costumer.full_name = full_name;
    
        
        try{
          return await this.costumerRepository.save(costumer);
        }catch(error){
          console.log(error)
          if(error.code === "ER_DUP_ENTRY"){
            
            throw new BadRequestException("Costumer Already Exist")
          }
        }
      
    }

    async findAll(): Promise<Costumer[]> {
        return await this.costumerRepository.query(`SELECT * FROM costumer`);
    }

    async findOneCostumer(id: number): Promise<Costumer> {
   
        const costumer = await this.costumerRepository.query(`SELECT * FROM costumer where id = ${id}`);
        if(costumer.length ===0){
            throw new NotFoundException('Costumer not found');
        }
        return costumer[0];
    }

    async updateCostumer(id: number, updateCostumerDto : UpdateCostumerDto): Promise<Costumer> {
        const costumer : Costumer = await this.findOneCostumer(id);
        const newCostuer : Costumer = Object.assign(costumer, updateCostumerDto);
        try{
          return await this.costumerRepository.save(newCostuer);
        }catch(error){
          if(error.code === "ER_DUP_ENTRY"){
            throw new BadRequestException("Costumer Already Exist")
          }
        }
    }

    async deleteCostumer(id: number): Promise<DeleteResult> {
        return await this.costumerRepository.delete(id);
    }

    async findByPhoneNumber(phone_number: string): Promise<Costumer> {
        const costumer:Costumer[] =  await this.costumerRepository.query(`SELECT * FROM costumer where phone_number = '${phone_number}'`);
 
        if(costumer.length === 0){
        
        throw new NotFoundException('Costumer not found');
      }
      return costumer[0];
      }

}