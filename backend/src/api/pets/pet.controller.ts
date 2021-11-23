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

import { PetCreateService } from '../../domain/pets/pet_create';
import { PetIndexService } from '../../domain/pets/pet_index';
import { PetUpdateByIdService } from '../../domain/pets/pet_update';
import { PetFindByIdService } from '../../domain/pets/pet_find_by_id';
import { PetDestroyService } from '../../domain/pets/pet_delete';

import { CreatePetDTO } from './dto/create.dto';
import { UpdatePetDto } from './dto/update.dto';
import { IQuery } from '../../common/interfaces/query';

import { JwtAuthGuard } from '../../auth/guards/jwt.guard';
// import { Roles } from '../../common/decorators/roles.decorator';
// import { Role } from '../../domain/users/user';
// import { RolesGuard } from '../../auth/guards/roles.guard';

@UseGuards(JwtAuthGuard)
@ApiTags('Pets')
@Controller('pets')
export class PetController {
  constructor(
    private readonly createPet: PetCreateService,
    private readonly indexPet: PetIndexService,
    private readonly findByIdPet: PetFindByIdService,
    private readonly updatePet: PetUpdateByIdService,
    private readonly destroyPet: PetDestroyService,
  ) {}

  @Post()
  public async create(@Body() pet: CreatePetDTO) {
    return this.createPet.create(pet);
  }

  @ApiQuery({ name: 'name', type: String, required: false })
  @ApiQuery({ name: 'tutor', type: String, required: false })
  @ApiQuery({ name: 'page', type: Number, required: false })
  @ApiQuery({ name: 'limit', type: Number, required: false })
  @ApiQuery({ name: 'startDate', type: Date, required: false })
  @ApiQuery({ name: 'endDate', type: Date, required: false })
  @Get()
  public async index(@Query() query:IQuery) {
    return this.indexPet.index(query);
  }

  @Get(':id')
  public async findById(@Param('id') param: string) {
    return this.findByIdPet.findById(param);
  }

  @Put(':id')
  public async update(@Param('id') param: string, @Body() product: UpdatePetDto) {
    return this.updatePet.updateById(param, product);
  }

  @Delete(':id')
  public async delete(@Param('id') param: string) {
    return this.destroyPet.destroy(param);
  }
}
