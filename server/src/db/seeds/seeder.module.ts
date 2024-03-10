import { Module } from '@nestjs/common';
import { UserSeederModule } from './user/user.seeder.module';
import { dataSourceOptions } from '../ormconfig';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Seeder } from './seeder';

@Module({
  imports: [TypeOrmModule.forRoot(dataSourceOptions), UserSeederModule],
  providers: [Seeder],
})
export class SeederModule {}
