import {
  Body,
  Controller,
  Get,
  Param,
  Post,
  Put,
  Delete,
  UseGuards,
  Query,
} from '@nestjs/common';
import { ApiTags, ApiQuery } from '@nestjs/swagger';

import { CreateUserDTO } from './dto/create.dto';
import { UpdateUserDto } from './dto/update.dto';
import { IQuery } from '../../common/interfaces/query';

import { UserCreateService } from '../../domain/users/user_create';
import { UserIndexService } from '../../domain/users/user_index';
import { UserFindByIdService } from '../../domain/users/user_find_by_id';
import { UpdateByIdService } from '../../domain/users/user_update';
import { UserDestroyService } from '../../domain/users/user_delete';

import { JwtAuthGuard } from '../../auth/guards/jwt.guard';
import { Roles } from '../../common/decorators/roles.decorator';
import { Role } from '../../domain/users/user';
import { RolesGuard } from '../../auth/guards/roles.guard';

@ApiTags('Users')
@Controller('users')
export class UserController {
  constructor(
    private readonly createUser: UserCreateService,
    private readonly indexUser: UserIndexService,
    private readonly findByIdUser: UserFindByIdService,
    private readonly updateUser: UpdateByIdService,
    private readonly destroyUser: UserDestroyService,
  ) { }

  @Post()
  public async create(@Body() user: CreateUserDTO) {
    return this.createUser.create(user);
  }

  @UseGuards(JwtAuthGuard, RolesGuard)
  @Roles(Role.Admin)
  @ApiQuery({ name: 'type', type: String, required: false })
  @ApiQuery({ name: 'page', type: Number, required: false })
  @ApiQuery({ name: 'limit', type: Number, required: false })
  @ApiQuery({ name: 'startDate', type: Date, required: false })
  @ApiQuery({ name: 'endDate', type: Date, required: false })
  @Get()
  public async index(@Query() query: IQuery) {
    return this.indexUser.index(query);
  }

  @UseGuards(JwtAuthGuard)
  @Get(':id')
  public async findById(@Param('id') param: string) {
    return this.findByIdUser.findById(param);
  }

  @UseGuards(JwtAuthGuard)
  @Put(':id')
  public async update(@Param('id') param: string, @Body() user: UpdateUserDto) {
    return this.updateUser.updateById(param, user);
  }

  @UseGuards(JwtAuthGuard)
  @Delete(':id')
  public async delete(@Param('id') param: string) {
    return this.destroyUser.destroy(param);
  }
}
