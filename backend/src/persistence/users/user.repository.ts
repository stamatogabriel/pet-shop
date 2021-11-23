import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';

import { IUserRepository } from '../../domain/users/user.repository';
import { User } from '../../domain/users/user';
import { IUserEntity } from './user.entity';

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

  public async UserIndex(): Promise<User[]> {
    try {
      return await this.user.find();
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
