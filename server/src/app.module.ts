import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ConfigModule } from '@nestjs/config';
import { dataSourceOptions } from './db/ormconfig';
import { AuthModule } from './auth/auth.module';
import { MagicWandModule } from './magicWand/magicWand.module';
@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true,
    }),
    TypeOrmModule.forRoot(dataSourceOptions),
    AuthModule,
    MagicWandModule,
  ],
})
export class AppModule {}
