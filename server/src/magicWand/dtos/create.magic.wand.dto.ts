import { IsEnum, IsString, Min } from 'class-validator';
import { Wood } from '../enums/wood.enum';
import { ApiProperty } from '@nestjs/swagger';

export class CreateMagicWandDto {
  @ApiProperty({ required: true })
  @IsString({ message: 'Please provide valid flexibility value.' })
  flexibility: string;

  @ApiProperty({ required: true, minimum: 1 })
  @Min(1, { message: 'Please provide valid length value (minimum is 1).' })
  length: number;

  @ApiProperty({ required: true })
  @IsEnum(Wood, { message: 'Please provide valid wood value.' })
  wood: Wood;
}
