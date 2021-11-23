import { ApiProperty } from '@nestjs/swagger';
import { IsString } from 'class-validator';

export class CreateSaleDTO {
  @IsString()
  @ApiProperty({ required: true })
  public readonly user_id: string;

  @IsString()
  @ApiProperty({ required: true })
  public readonly pet_id: string;

  @IsString()
  @ApiProperty({ required: true })
  public readonly product_id: string[];
}
