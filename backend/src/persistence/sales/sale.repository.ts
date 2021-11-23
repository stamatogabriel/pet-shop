import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';

import { ISaleRepository } from '../../domain/sales/sale.repository';
import { SaleProduct, SaleService, SaleServiceIndex, SaleProductIndex } from '../../domain/sales/sale';
import { ISaleEntity } from './sale.entity';

import { IQuery } from '../../common/interfaces/query';

@Injectable()
export class SaleRepository implements ISaleRepository {
  constructor(
    @InjectModel('Sale')
    private readonly sale: Model<ISaleEntity>,
  ) { }

  public async SaleCreate(data: SaleProduct): Promise<SaleProduct> {
    try {
      return await this.sale.create(data);
    } catch (error) {
      throw new HttpException(
        {
          message: `could not create sale: ${error}`,
        },
        HttpStatus.BAD_REQUEST,
      );
    }
  }

  public async ScheduleCreate(data: SaleService): Promise<SaleService> {
    try {
      return await this.sale.create(data);
    } catch (error) {
      throw new HttpException(
        {
          message: `could not create sale: ${error}`,
        },
        HttpStatus.BAD_REQUEST,
      );
    }
  }

  public async SalesIndex(query: IQuery): Promise<SaleProductIndex> {
    try {
      const page = Number(query.page) || 1;

      const limit = Number(query.limit) || 10;

      const skip = (page - 1) * limit;

      let data: any = {
        schedule: undefined,
      };

      if (query.startDate && query.endDate)
        data = {
          ...data,
          created_at: {
            $gte: query.startDate,
            $lte: query.endDate,
          },
        };

      const sales = await this.sale
        .find(data)
        .skip(skip)
        .limit(limit)
        .populate('user_id')
        .populate('pet_id')
        .populate('product_id');

      const count = await this.sale.countDocuments(data);

      return {
        sales,
        total_pages: Math.ceil(count / limit),
        current_page: page,
      }
    } catch (error) {
      throw new HttpException(
        {
          message: `could not list sales: ${error}`,
        },
        HttpStatus.BAD_REQUEST,
      );
    }
  }

  public async ScheduleIndex(query: IQuery): Promise<SaleServiceIndex> {
    try {
      const page = Number(query.page) || 1;

      const limit = Number(query.limit) || 10;

      const skip = (page - 1) * limit;

      let data: any = {};

      if (query.startDate && query.endDate)
        data = {
          ...data,
          created_at: {
            $gte: query.startDate,
            $lte: query.endDate,
          },
        };

      const schedules = await this.sale
        .find(data)
        .skip(skip)
        .limit(limit)
        .populate('user_id')
        .populate('pet_id')
        .populate('product_id');

      const count = await this.sale.countDocuments(data);

      return {
        schedules,
        total_pages: Math.ceil(count / limit),
        current_page: page,
      }
    } catch (error) {
      throw new HttpException(
        {
          message: `could not list schedules: ${error}`,
        },
        HttpStatus.BAD_REQUEST,
      );
    }
  }

  public async SaleFindById(id: string): Promise<SaleProduct | SaleService> {
    try {
      return await this.sale.findById(id);
    } catch (error) {
      throw new HttpException(
        {
          message: `could not find sale: ${error}`,
        },
        HttpStatus.BAD_REQUEST,
      );
    }
  }

  public async SaleUpdateById(id: string, data: Partial<SaleProduct>): Promise<SaleProduct> {
    try {
      return await this.sale.findByIdAndUpdate(id, data, { new: true });
    } catch (error) {
      throw new HttpException(
        {
          message: `could not update sale: ${error}`,
        },
        HttpStatus.BAD_REQUEST,
      );
    }
  }

  public async ScheduleUpdateById(id: string, data: Partial<SaleService>): Promise<SaleService> {
    try {
      return await this.sale.findByIdAndUpdate(id, data, { new: true });
    } catch (error) {
      throw new HttpException(
        {
          message: `could not update schedule: ${error}`,
        },
        HttpStatus.BAD_REQUEST,
      );
    }
  }

  public async SaleDestroy(id: string): Promise<unknown> {
    try {
      await this.sale.findByIdAndDelete(id);
      return { message: 'Sale successfully deleted.' };
    } catch (error) {
      throw new HttpException(
        {
          message: `could not delete sale: ${error}`,
        },
        HttpStatus.BAD_REQUEST,
      );
    }
  }
}
