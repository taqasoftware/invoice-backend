import { IsNotEmpty } from 'class-validator';

export class CreateCostumerDto {
  @IsNotEmpty()
  invoice_number: string;

  @IsNotEmpty()
  phone_number: string;

  @IsNotEmpty()
  card_number: string;

  @IsNotEmpty()
  full_name: string;
}
