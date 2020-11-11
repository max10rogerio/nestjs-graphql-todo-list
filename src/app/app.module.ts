import { Module } from '@nestjs/common';

import { GraphqlModule } from '@graphql/graphql.module';

import { AppController } from './controllers/app.controller';
import { AppService } from './services/app.service';

@Module({
  imports: [GraphqlModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
