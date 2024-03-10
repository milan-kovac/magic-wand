import { Injectable, UnauthorizedException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { JwtService } from '@nestjs/jwt';
import { User } from 'src/user/user.entity';
import { Repository } from 'typeorm';
import { LoginDto } from './dtos/login.dto';
import * as bcrypt from 'bcryptjs';

@Injectable()
export class AuthService {
  constructor(
    @InjectRepository(User)
    private readonly userRepository: Repository<User>,
    private readonly jwtService: JwtService,
  ) {}

  async login(loginRequest: LoginDto): Promise<string> {
    const { username, password } = loginRequest;
    const user = await this.userRepository
      .createQueryBuilder('user')
      .addSelect('user.password')
      .where('user.username = :username', { username })
      .getOne();

    if (!user) {
      throw new UnauthorizedException('Username or password is wrong.');
    }

    const isPasswordCorrect = await bcrypt.compare(password, user.password);
    if (!isPasswordCorrect) {
      throw new UnauthorizedException('Password is incorect.');
    }

    return this.jwtService.sign({ id: user.id });
  }

  async validateToken(bearerToken: string): Promise<User> {
    try {
      const decoded = this.jwtService.verify(bearerToken);
      const { id } = decoded;
      return await this.userRepository.findOneBy({ id });
    } catch (e) {
      console.log('e', e);
      throw new UnauthorizedException('Not a valid JWT token.');
    }
  }
}
