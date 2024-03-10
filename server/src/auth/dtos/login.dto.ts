import { ApiProperty } from '@nestjs/swagger';
import { IsString } from 'class-validator';

export class LoginDto {
  @ApiProperty({ required: true })
  @IsString({ message: 'Please provide username.' })
  username: string;

  @ApiProperty({ required: true })
  @IsString({ message: 'Please provide password.' })
  password: string;
}
