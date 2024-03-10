import { GenericResponse } from 'src/shared/create.response';
import { MagicWand } from '../magicWand.entity';
import { ApiResponseProperty } from '@nestjs/swagger';

export class GetMagicWandResponseDto extends GenericResponse<MagicWand> {
  @ApiResponseProperty({
    type: MagicWand,
  })
  data: MagicWand;
}
