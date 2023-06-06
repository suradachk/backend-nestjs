import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { prisma } from './prisma.service';

@Module({
  imports: [],
  controllers: [AppController],
  providers: [AppService, {
    provide: 'PrismaService',
    useValue: prisma,
  },],
})
export class AppModule {}
