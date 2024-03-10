import { Body, Controller, Post } from '@nestjs/common';
import { AuthService } from './auth.service';
import { LoginDto } from './dtos/login.dto';
import { ApiTags, ApiOperation, ApiBody } from '@nestjs/swagger';
import { CreateGenericResponse } from 'src/shared/create.response';
import { LoginResponseDto } from './dtos/login.response.dto';

@ApiTags('Auth')
@Controller('auth')
export class AuthController {
  constructor(private readonly authService: AuthService) {}

  @ApiOperation({
    summary: 'Login user.',
  })
  @ApiBody({ type: LoginDto })
  @Post('login')
  async login(@Body() loginRequest: LoginDto): Promise<LoginResponseDto> {
    const token = await this.authService.login(loginRequest);
    return CreateGenericResponse(token);
  }
}
