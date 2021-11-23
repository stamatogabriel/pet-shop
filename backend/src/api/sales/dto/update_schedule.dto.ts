import { PartialType } from '@nestjs/swagger';
import { CreateScheduleDTO } from './create_schedule.dto';

export class UpdateScheduleDto extends PartialType(CreateScheduleDTO) {}
