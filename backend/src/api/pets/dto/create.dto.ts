import { ApiProperty } from '@nestjs/swagger';
import { IsString } from 'class-validator';

export class CreatePetDTO {
  @IsString()
  @ApiProperty({ required: true })
  public readonly name: string;

  @IsString()
  @ApiProperty({ required: true })
  public readonly tutor: string;

  @IsString()
  @ApiProperty({ required: true })
  public readonly age: string;
}
