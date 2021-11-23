import { ApiProperty } from '@nestjs/swagger';
import { IsBoolean, IsEmail, IsNumber, IsString } from 'class-validator';

export class CreateProductDTO {
  @IsString()
  @ApiProperty({ required: true })
  public readonly title: string;

  @IsString()
  @ApiProperty({ required: true })
  public readonly description: string;

  @IsNumber()
  @ApiProperty({ required: true })
  public readonly price: number;

  @IsNumber()
  @ApiProperty()
  public readonly stock?: number;

  @IsBoolean()
  @ApiProperty({ required: true })
  public readonly need_schedule: boolean;
}
