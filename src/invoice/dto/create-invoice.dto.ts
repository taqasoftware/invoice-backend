import { MaxLength ,MinLength,IsString,IsNotEmpty} from "class-validator";



export class CreateInvoiceDto {
    @IsNotEmpty()
    @IsString()
    @MinLength(3)
    @MaxLength(20) 
    invoice_number: string;

    @IsNotEmpty()
    @IsString()
    @MinLength(3)
    @MaxLength(20)
    phoneNumber: string;

    @IsString()
    @MinLength(3)
    @MaxLength(20)
    fullName: string;

}
