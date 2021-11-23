import { ApiProperty } from '@nestjs/swagger';
import { IsString, IsDate } from 'class-validator';

export class CreateScheduleDTO {
  @IsString()
  @ApiProperty({ required: true })
  public readonly user_id: string;

  @IsString()
  @ApiProperty({ required: true })
  public readonly product_id: string[];

  @IsString()
  @ApiProperty({ required: true })
  public readonly pet_id: string;

  @IsDate()
  @ApiProperty({ required: true })
  public readonly schedule: Date;
}
