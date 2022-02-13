import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';

import { IProductRepository } from '../../domain/products/product.repository';
import { Product, ProductIndex } from '../../domain/products/product';
import { IProductEntity } from './product.entity';

import { IQuery } from '../../common/interfaces/query';
import { diacriticSensitiveRegex } from '../../common/logicals/diatric_sensitive_regex';

@Injectable()
export class ProductRepository implements IProductRepository {
  constructor(
    @InjectModel('Product')
    private readonly product: Model<IProductEntity>,
  ) {}

  public async ProductCreate(data: Product): Promise<Product> {
    try {
      return await this.product.create(data);
    } catch (error) {
      throw new HttpException(
        {
          message: `could not create product: ${error}`,
        },
        HttpStatus.BAD_REQUEST,
      );
    }
  }

  public async ProductIndex(query: IQuery): Promise<ProductIndex> {
    try {
      const page = Number(query.page) || 1;

      const limit = Number(query.limit) || 10;

      const skip = (page - 1) * limit;

      let data = {};

      if (query.title) {
        data = {
          ...data,
          title: {
            $regex: diacriticSensitiveRegex(query.title),
            $options: 'i',
          },
        };
      }

      if (query.description) {
        data = {
          ...data,
          description: {
            $regex: diacriticSensitiveRegex(query.title),
            $options: 'i',
          },
        };
      }

      if (query.startDate && query.endDate)
        data = {
          ...data,
          created_at: {
            $gte: query.startDate,
            $lte: query.endDate,
          },
        };

      const products = await this.product.find(data).skip(skip).limit(limit);

      const count = await this.product.countDocuments(data);

      return {
        products,
        total_pages: Math.ceil(count / limit),
        current_page: page,
      };
    } catch (error) {
      throw new HttpException(
        {
          message: `could not list products: ${error}`,
        },
        HttpStatus.BAD_REQUEST,
      );
    }
  }

  public async ProductFindById(id: string): Promise<Product> {
    try {
      return await this.product.findById(id);
    } catch (error) {
      throw new HttpException(
        {
          message: `could not find product: ${error}`,
        },
        HttpStatus.BAD_REQUEST,
      );
    }
  }

  public async ProductUpdateById(
    id: string,
    data: Partial<Product>,
  ): Promise<Product> {
    try {
      return await this.product.findByIdAndUpdate(id, data, { new: true });
    } catch (error) {
      throw new HttpException(
        {
          message: `could not update product: ${error}`,
        },
        HttpStatus.BAD_REQUEST,
      );
    }
  }

  public async ProductDestroy(id: string): Promise<unknown> {
    try {
      await this.product.findByIdAndDelete(id);
      return { message: 'Product successfully deleted.' };
    } catch (error) {
      throw new HttpException(
        {
          message: `could not delete product: ${error}`,
        },
        HttpStatus.BAD_REQUEST,
      );
    }
  }
}
