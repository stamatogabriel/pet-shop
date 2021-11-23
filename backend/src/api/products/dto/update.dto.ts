import { PartialType } from '@nestjs/swagger';
import { CreateProductDTO } from './create.dto';

export class UpdateProductDto extends PartialType(CreateProductDTO) {}
