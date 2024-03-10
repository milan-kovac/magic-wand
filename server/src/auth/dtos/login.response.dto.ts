import { GenericResponse } from 'src/shared/create.response';
import { ApiResponseProperty } from '@nestjs/swagger';

export class LoginResponseDto extends GenericResponse {
  @ApiResponseProperty({
    type: String,
  })
  data: string;
}
