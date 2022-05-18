import { MaxLength ,MinLength,IsString,IsNotEmpty} from "class-validator";



export class CreateInvoiceDto {
    @IsNotEmpty()
 
    invoice_number: string;

    @IsNotEmpty()
    @MinLength(3)
    @MaxLength(20)
    costumer_id: number;

}
