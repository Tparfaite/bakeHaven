import { IsEmail, IsNotEmpty, IsOptional, IsString } from "class-validator";
import { ApiProperty } from "@nestjs/swagger";


export class CreateUserDto {
    @IsString()
    @IsNotEmpty()
    @ApiProperty()
    firstName: string;

    @IsString()
    @IsNotEmpty()
    @ApiProperty()
    lastName: string;

    @IsString()
    @IsNotEmpty()
    @IsEmail()
    @ApiProperty()
    email: string;

    @IsString()
    @ApiProperty()
    phoneNumber:string

    @IsString()
    @IsNotEmpty()
    @ApiProperty()
    password: string;
    

}
