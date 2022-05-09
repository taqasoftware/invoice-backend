import { IsNotEmpty } from "class-validator";


export class CreateCostumerDto {

    @IsNotEmpty()
    full_name: string;

    @IsNotEmpty()
    phone_number: string;

    @IsNotEmpty()
    poinst: number;

}
