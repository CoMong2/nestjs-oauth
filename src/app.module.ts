import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { PassportModule } from '@nestjs/passport';
import { GoogleStrategy } from './auth/google.strategy';
import { AuthModule } from './auth/auth.module';

@Module({
  imports: [
    PassportModule.register({ defaultStrategy: 'google' }),
    AuthModule,
  ],
  controllers: [AppController],
  providers: [
    AppService,
    GoogleStrategy,
  ],
})
export class AppModule {}
