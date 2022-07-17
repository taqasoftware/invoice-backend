import { MaxLength ,MinLength,IsString,IsNotEmpty} from "class-validator";



export class CreateWithPhoneNumberDto {
    @IsNotEmpty()
 
    invoice_number: string;

    @IsNotEmpty()

    phone_number: string;

}
