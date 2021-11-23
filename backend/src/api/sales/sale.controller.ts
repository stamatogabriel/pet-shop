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

import { SaleCreateService } from '../../domain/sales/create_sale_product';
import { ScheduleCreateService } from '../../domain/sales/create_schedule_product';
import { SaleDestroyService } from '../../domain/sales/sale_delete';
import { SaleFindByIdService } from '../../domain/sales/sale_find_by_id';
import { SaleIndexService } from '../../domain/sales/sale_index';
import { SaleUpdateByIdService } from '../../domain/sales/sale_update';
import { ScheduleIndexService } from '../../domain/sales/schedule_index';
import { ScheduleUpdateByIdService } from '../../domain/sales/schedule_update';


import { CreateScheduleDTO } from './dto/create_schedule.dto';
import { UpdateScheduleDto } from './dto/update_schedule.dto';
import { CreateSaleDTO } from './dto/create_sale.dto';
import { UpdateSaleDto } from './dto/update_sale.dto';

import { IQuery } from '../../common/interfaces/query';

import { JwtAuthGuard } from '../../auth/guards/jwt.guard';
import { Roles } from '../../common/decorators/roles.decorator';
import { Role } from '../../domain/users/user';
import { RolesGuard } from '../../auth/guards/roles.guard';

@ApiTags('Sales')
@Controller('sales')
export class SaleController {
  constructor(
    private readonly createSale: SaleCreateService,
    private readonly createSchedule: ScheduleCreateService,
    private readonly indexSale: SaleIndexService,
    private readonly indexSchedule: ScheduleIndexService,
    private readonly updateSale: SaleUpdateByIdService,
    private readonly updateSchedule: ScheduleUpdateByIdService,
    private readonly findSale: SaleFindByIdService,
    private readonly destroySale: SaleDestroyService,
  ) {}

  @UseGuards(JwtAuthGuard, RolesGuard)
  @Roles(Role.Admin)
  @Post('product')
  public async saleCreate(@Body() sale: CreateSaleDTO) {
    return this.createSale.createSale(sale);
  }

  @UseGuards(JwtAuthGuard, RolesGuard)
  @Roles(Role.Admin)
  @Post('schedule')
  public async scheduleCreate(@Body() sale: CreateScheduleDTO) {
    return this.createSchedule.createSchedule(sale);
  }

  @ApiQuery({ name: 'page', type: Number, required: false })
  @ApiQuery({ name: 'limit', type: Number, required: false })
  @ApiQuery({ name: 'startDate', type: Date, required: false })
  @ApiQuery({ name: 'endDate', type: Date, required: false })
  @Get('product')
  public async saleIndex(@Query() query:IQuery) {
    return this.indexSale.indexSale(query);
  }

  @ApiQuery({ name: 'page', type: Number, required: false })
  @ApiQuery({ name: 'limit', type: Number, required: false })
  @ApiQuery({ name: 'startDate', type: Date, required: false })
  @ApiQuery({ name: 'endDate', type: Date, required: false })
  @Get('schedule')
  public async scheduleIndex(@Query() query:IQuery) {
    return this.indexSchedule.indexSchedule(query);
  }

  @Get(':id')
  public async findById(@Param('id') param: string) {
    return this.findSale.findById(param);
  }

  @UseGuards(JwtAuthGuard, RolesGuard)
  @Roles(Role.Admin)
  @Put('product/:id')
  public async saleUpdate(@Param('id') param: string, @Body() product: UpdateSaleDto) {
    return this.updateSale.updateById(param, product);
  }

  @UseGuards(JwtAuthGuard, RolesGuard)
  @Roles(Role.Admin)
  @Put('schedule/:id')
  public async scheduleUpdate(@Param('id') param: string, @Body() product: UpdateScheduleDto) {
    return this.updateSchedule.updateById(param, product);
  }

  @UseGuards(JwtAuthGuard, RolesGuard)
  @Roles(Role.Admin)
  @Delete(':id')
  public async delete(@Param('id') param: string) {
    return this.destroySale.destroy(param);
  }
}
