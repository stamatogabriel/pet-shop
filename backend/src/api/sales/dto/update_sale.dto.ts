import { PartialType } from '@nestjs/swagger';
import { CreateSaleDTO } from './create_sale.dto';

export class UpdateSaleDto extends PartialType(CreateSaleDTO) {}
