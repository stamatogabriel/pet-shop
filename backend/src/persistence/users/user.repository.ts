import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';

import { IUserRepository } from '../../domain/users/user.repository';
import { User, UserIndex } from '../../domain/users/user';
import { IUserEntity } from './user.entity';
import { IQuery } from '../../common/interfaces/query';
import { diacriticSensitiveRegex } from '../../common/logicals/diatric_sensitive_regex';

@Injectable()
export class UserRepository implements IUserRepository {
  constructor(
    @InjectModel('User')
    private readonly user: Model<IUserEntity>,
  ) {}

  public async UserCreate(data: User): Promise<User> {
    try {
      return await this.user.create(data);
    } catch (error) {
      throw new HttpException(
        {
          message: `could not create user: ${error}`,
        },
        HttpStatus.BAD_REQUEST,
      );
    }
  }

  public async UserIndex(query: IQuery): Promise<UserIndex> {
    try {
      const page = Number(query.page) || 1;

      const limit = Number(query.limit) || 10;

      const skip = (page - 1) * limit;

      let data = {};

      if (query.name) {
        data = {
          ...data,
          name: {
            $regex: diacriticSensitiveRegex(query.title),
            $options: 'i',
          },
        };
      }

      if (query.type) {
        data = {
          ...data,
          type: query.type,
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

      const users = await this.user.find(data).skip(skip).limit(limit);

      const count = await this.user.countDocuments(data);

      return {
        users,
        total_pages: Math.ceil(count / limit),
        current_page: page,
      };
    } catch (error) {
      throw new HttpException(
        {
          message: `could not list users: ${error}`,
        },
        HttpStatus.BAD_REQUEST,
      );
    }
  }

  public async UserFindById(id: string): Promise<User> {
    try {
      return await this.user.findById(id);
    } catch (error) {
      throw new HttpException(
        {
          message: `could not find user: ${error}`,
        },
        HttpStatus.BAD_REQUEST,
      );
    }
  }

  public async UserFindByEmail(email: string): Promise<User> {
    try {
      return await this.user.findOne({ email }).select('+password');
    } catch (error) {
      throw new HttpException(
        {
          message: `could not find user: ${error}`,
        },
        HttpStatus.BAD_REQUEST,
      );
    }
  }

  public async UserFindByToken(token: string): Promise<User> {
    try {
      return await this.user.findOne({ passwordResetToken: token });
    } catch (error) {
      throw new HttpException(
        {
          message: `could not find user: ${error}`,
        },
        HttpStatus.BAD_REQUEST,
      );
    }
  }

  public async UserUpdateById(id: string, data: Partial<User>): Promise<User> {
    try {
      return await this.user.findByIdAndUpdate(id, data, { new: true });
    } catch (error) {
      throw new HttpException(
        {
          message: `could not update user: ${error}`,
        },
        HttpStatus.BAD_REQUEST,
      );
    }
  }

  public async UserDestroy(id: string): Promise<unknown> {
    try {
      await this.user.findByIdAndDelete(id);
      return { message: 'User successfully deleted.' };
    } catch (error) {
      throw new HttpException(
        {
          message: `could not delete user: ${error}`,
        },
        HttpStatus.BAD_REQUEST,
      );
    }
  }
}
