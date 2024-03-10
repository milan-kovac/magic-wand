import { Body, Controller, Get, Param, Post, UseGuards, UseInterceptors } from '@nestjs/common';
import { ApiBearerAuth, ApiBody, ApiOperation, ApiParam, ApiResponse, ApiTags } from '@nestjs/swagger';
import { MagicWandService } from './magicWand.service';
import { CreateMagicWandDto } from './dtos/create.magic.wand.dto';
import { CurrentUser } from 'src/auth/decorators/current.user.decorator';
import { CreateGenericResponse } from 'src/shared/create.response';
import { AuthGuard } from 'src/auth/guards/auth.guard';
import { CreateMagicWandResponseDto } from './dtos/create.magic.wand.response.dto';
import { JwtIsOptional } from 'src/auth/decorators/jwt.is.optional';
import { GetAllMagicWandsResponseDto } from './dtos/get.all.magic.wands.response.dto';
import { GetAllWandsInterceptor } from './interceptors/get.all.magic.wands.interceptor';
import { GetMagicWandResponseDto } from './dtos/get.magic.wand.response.dto';

@ApiTags('MagicWand')
@Controller('magic-wand')
export class MagicWandController {
  constructor(private readonly magicWandService: MagicWandService) {}

  @ApiBearerAuth()
  @ApiOperation({
    summary: 'Create magic wand.',
  })
  @ApiBody({ type: CreateMagicWandDto })
  @ApiResponse({ type: CreateMagicWandResponseDto })
  @UseGuards(AuthGuard)
  @Post()
  async create(@Body() creatMagicWandRequest: CreateMagicWandDto, @CurrentUser() user): Promise<CreateMagicWandResponseDto> {
    const wand = await this.magicWandService.create(creatMagicWandRequest, user);
    return CreateGenericResponse(wand);
  }

  @ApiBearerAuth()
  @ApiOperation({
    summary: 'Get magic wand.',
  })
  @ApiParam({ name: 'id', description: 'Magic wand id.' })
  @ApiResponse({ type: GetMagicWandResponseDto })
  @UseInterceptors(GetAllWandsInterceptor)
  @UseGuards(AuthGuard)
  @Get(':id')
  async get(@Param('id') id: number): Promise<GetMagicWandResponseDto> {
    const wand = await this.magicWandService.get(id);
    return CreateGenericResponse(wand);
  }

  @ApiBearerAuth()
  @ApiOperation({
    summary: 'Get all magic wands.',
  })
  @ApiResponse({ type: GetAllMagicWandsResponseDto })
  @UseInterceptors(GetAllWandsInterceptor)
  @UseGuards(AuthGuard)
  @JwtIsOptional()
  @Get('all')
  async getAll(): Promise<GetAllMagicWandsResponseDto> {
    const wands = await this.magicWandService.getAll();
    return CreateGenericResponse(wands);
  }
}
