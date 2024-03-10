import { SetMetadata } from '@nestjs/common';

export const JwtIsOptional = (optional: boolean = true) => SetMetadata('jwtIsOptional', optional);
