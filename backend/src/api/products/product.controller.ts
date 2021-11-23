import {
  Body,
  Controller,
  Get,
  Param,
  Post,
  Put,
  Delete,
  Query,
  UseGuards,
} from '@nestjs/common';
import { ApiTags, ApiQuery } from '@nestjs/swagger';

import { ProductCreateService } from '../../domain/products/product_create';
import { ProductIndexService } from '../../domain/products/product_index';
import { ProductUpdateByIdService } from '../../domain/products/product_update';
import { ProductFindByIdService } from '../../domain/products/product_find_by_id';
import { ProductDestroyService } from '../../domain/products/product_delete';

import { CreateProductDTO } from './dto/create.dto';
import { UpdateProductDto } from './dto/update.dto';
import { IQuery } from '../../common/interfaces/query';

import { JwtAuthGuard } from '../../auth/guards/jwt.guard';
import { Roles } from '../../common/decorators/roles.decorator';
import { Role } from '../../domain/users/user';
import { RolesGuard } from '../../auth/guards/roles.guard';

@ApiTags('Products')
@Controller('products')
export class ProductController {
  constructor(
    private readonly createProduct: ProductCreateService,
    private readonly indexProduct: ProductIndexService,
    private readonly findByIdProduct: ProductFindByIdService,
    private readonly updateProduct: ProductUpdateByIdService,
    private readonly destroyProduct: ProductDestroyService,
  ) {}

  @UseGuards(JwtAuthGuard, RolesGuard)
  @Roles(Role.Admin)
  @Post()
  public async create(@Body() product: CreateProductDTO) {
    return this.createProduct.create(product);
  }

  @ApiQuery({ name: 'title', type: String, required: false })
  @ApiQuery({ name: 'description', type: String, required: false })
  @ApiQuery({ name: 'page', type: Number, required: false })
  @ApiQuery({ name: 'limit', type: Number, required: false })
  @ApiQuery({ name: 'startDate', type: Date, required: false })
  @ApiQuery({ name: 'endDate', type: Date, required: false })
  @Get()
  public async index(@Query() query:IQuery) {
    return this.indexProduct.index(query);
  }

  @Get(':id')
  public async findById(@Param('id') param: string) {
    return this.findByIdProduct.findById(param);
  }

  @UseGuards(JwtAuthGuard, RolesGuard)
  @Roles(Role.Admin)
  @Put(':id')
  public async update(@Param('id') param: string, @Body() product: UpdateProductDto) {
    return this.updateProduct.updateById(param, product);
  }

  @UseGuards(JwtAuthGuard, RolesGuard)
  @Roles(Role.Admin)
  @Delete(':id')
  public async delete(@Param('id') param: string) {
    return this.destroyProduct.destroy(param);
  }
}
