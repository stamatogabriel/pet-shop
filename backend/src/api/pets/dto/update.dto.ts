import { PartialType } from '@nestjs/swagger';
import { CreatePetDTO } from './create.dto';

export class UpdatePetDto extends PartialType(CreatePetDTO) {}
