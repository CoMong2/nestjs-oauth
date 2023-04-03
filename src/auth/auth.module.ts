import { Module } from '@nestjs/common';
import { AuthController } from './auth.controller';
import { GoogleStrategy } from './google/google.strategy';
import { GoogleModule } from './google/google.module';

@Module({
    imports: [
      GoogleModule
    ],
    controllers: [AuthController,
    ],
    providers: [
      GoogleStrategy,
    ],
  })
  export class AuthModule {}
  