import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';

import { IPetRepository } from '../../domain/pets/pet.repository';
import { Pet, PetIndex } from '../../domain/pets/pet';
import { IPetEntity } from './pet.entity';

import { IQuery } from '../../common/interfaces/query';
import { diacriticSensitiveRegex } from '../../common/logicals/diatric_sensitive_regex';

@Injectable()
export class PetRepository implements IPetRepository {
  constructor(
    @InjectModel('Pet')
    private readonly pet: Model<IPetEntity>,
  ) { }

  public async PetCreate(data: Pet): Promise<Pet> {
    try {
      return await this.pet.create(data);
    } catch (error) {
      throw new HttpException(
        {
          message: `could not create product: ${error}`,
        },
        HttpStatus.BAD_REQUEST,
      );
    }
  }

  public async PetIndex(query: IQuery): Promise<PetIndex> {
    try {
      const page = Number(query.page) || 1;

      const limit = Number(query.limit) || 10;

      const skip = (page - 1) * limit;

      let data = {};

      if (query.name) {
        data = {
          ...data,
          name: {
            $regex: diacriticSensitiveRegex(query.name),
            $options: 'i',
          },
        };
      }

      if (query.tutor) {
        data = {
          ...data,
          tutor: query.tutor,
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

      const pets = await this.pet
        .find(data)
        .skip(skip)
        .limit(limit)
        .populate('tutor');

        const count = await this.pet.countDocuments(data);

      return {
        pets,
        total_pages: Math.ceil(count / limit),
        current_page: page,
      }
    } catch (error) {
      throw new HttpException(
        {
          message: `could not list pets: ${error}`,
        },
        HttpStatus.BAD_REQUEST,
      );
    }
  }

  public async PetFindById(id: string): Promise<Pet> {
    try {
      return await this.pet.findById(id);
    } catch (error) {
      throw new HttpException(
        {
          message: `could not find pet: ${error}`,
        },
        HttpStatus.BAD_REQUEST,
      );
    }
  }

  public async PetUpdateById(id: string, data: Partial<Pet>): Promise<Pet> {
    try {
      return await this.pet.findByIdAndUpdate(id, data, { new: true });
    } catch (error) {
      throw new HttpException(
        {
          message: `could not update pet: ${error}`,
        },
        HttpStatus.BAD_REQUEST,
      );
    }
  }

  public async PetDestroy(id: string): Promise<unknown> {
    try {
      await this.pet.findByIdAndDelete(id);
      return { message: 'Pet successfully deleted.' };
    } catch (error) {
      throw new HttpException(
        {
          message: `could not delete pet: ${error}`,
        },
        HttpStatus.BAD_REQUEST,
      );
    }
  }
}
