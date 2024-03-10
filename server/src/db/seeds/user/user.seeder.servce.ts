import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { User } from 'src/user/user.entity';
import { Repository } from 'typeorm';
import * as bcrypt from 'bcryptjs';

@Injectable()
export class UserSeederService {
  constructor(
    @InjectRepository(User)
    private readonly userRepository: Repository<User>,
  ) {}

  async run(): Promise<void> {
    await Promise.all([this.delete(), this.create()]);
  }

  private async delete(): Promise<void> {
    await this.userRepository.delete({});
  }

  private async create(): Promise<void> {
    const users = [
      { username: 'harry', password: await bcrypt.hash('potter*', 10) },
      { username: 'voldemort', password: await bcrypt.hash('lord*', 10) },
    ] as User[];

    await this.userRepository.save(users);
  }
}
