import { IsString, IsNotEmpty, IsEmail, Length } from 'class-validator';
import { PartialType, ApiProperty } from '@nestjs/swagger';

export class CreateContactDto {
  @IsString()
  @ApiProperty({ description: "the user' email" })
  readonly name: string;

  @IsString()
  @IsNotEmpty()
  @ApiProperty({ description: "the user' alias" })
  readonly alias: string;

}

export class UpdateContactDto extends PartialType(CreateContactDto) {}