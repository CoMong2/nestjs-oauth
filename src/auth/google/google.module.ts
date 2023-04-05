import { Module } from '@nestjs/common';
import { GoogleController } from './google.controller';

@Module({
  imports: [],
  controllers: [GoogleController],
  providers: [],
})
export class GoogleModule {}
