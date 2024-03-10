import { Repository } from 'typeorm';
import { MagicWand } from './magicWand.entity';
import { BadRequestException, Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { User } from 'src/user/user.entity';
import { CreateMagicWandDto } from './dtos/create.magic.wand.dto';
@Injectable()
export class MagicWandService {
  constructor(
    @InjectRepository(MagicWand)
    private readonly magicWandRepository: Repository<MagicWand>,
  ) {}

  async create(creatMagicWandRequest: CreateMagicWandDto, user: User): Promise<MagicWand> {
    return await this.magicWandRepository.save({ ...creatMagicWandRequest, owner: user });
  }

  async getAll(): Promise<MagicWand[]> {
    return await this.magicWandRepository.find({ relations: ['owner'] });
  }

  async get(id: number): Promise<MagicWand> {
    const wand = await this.magicWandRepository.findOne({ where: { id }, relations: ['owner'] });
    if (!wand) {
      throw new BadRequestException('Magic wand not found.');
    }
    return wand;
  }
}
