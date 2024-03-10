import { Injectable, Logger } from '@nestjs/common';
import { UserSeederService } from './user/user.seeder.servce';

@Injectable()
export class Seeder {
  constructor(private readonly userSeederService: UserSeederService) {}
  async seed(): Promise<void> {
    try {
      await this.userSeederService.run();
    } catch (error) {
      Logger.log(error);
    }
  }
}
