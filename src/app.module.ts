import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UtilsModule } from 'ic/utils';

@Module({
  imports: [UtilsModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule { }
