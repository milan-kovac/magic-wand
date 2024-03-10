import { Module } from '@nestjs/common';
import { MagicWandService } from './magicWand.service';
import { MagicWandController } from './magicWand.controller';
import { AuthModule } from 'src/auth/auth.module';
import { MagicWand } from './magicWand.entity';
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
  imports: [TypeOrmModule.forFeature([MagicWand]), AuthModule],
  providers: [MagicWandService],
  controllers: [MagicWandController],
  exports: [MagicWandService],
})
export class MagicWandModule {}
