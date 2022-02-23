import { ApiProperty } from '@nestjs/swagger';
import { IsEmail, IsEnum, IsString } from 'class-validator';
import { Role } from '../../../domain/users/user';

export class CreateUserDTO {
  @IsString()
  @ApiProperty({ required: true })
  public readonly name: string;

  @IsString()
  @IsEmail()
  @ApiProperty({ required: true })
  public readonly email: string;

  @IsString()
  @IsEmail()
  @ApiProperty({ required: false })
  public readonly avatar?: string | undefined;

  @IsString()
  @IsEmail()
  @ApiProperty({ required: true })
  public readonly phone: string;

  @IsString()
  @IsEnum(Role)
  @IsEmail()
  @ApiProperty({ required: true })
  public readonly roles: Role[];

  @IsString()
  @ApiProperty({ required: true })
  public readonly password: string;
}
