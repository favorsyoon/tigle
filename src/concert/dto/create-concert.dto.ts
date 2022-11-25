import { ApiProperty, PickType } from '@nestjs/swagger';
import { Concert } from '../../entities/concert.entity';
import { IsNotEmpty, IsNumber, IsOptional, IsString } from 'class-validator';

export class CreateConcertDto extends PickType(Concert, [
  'categoryId',
  'concertName',
  'concertImg',
  'concertInfo',
  'concertDate',
  'ticketingDate',
  'ticketingUrl',
  'calender',
  'playTime',
  'locationName',
  'ratings',
 ] as const) {}
