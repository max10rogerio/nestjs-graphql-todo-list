import { Module } from '@nestjs/common';

import { GraphqlModule } from '../graphql';
import { TodoModule } from '../modules/todo';

import { AppController } from './controllers/app.controller';
import { AppService } from './services/app.service';

@Module({
  imports: [TodoModule, GraphqlModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
