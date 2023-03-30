import { Controller, Get, Req, UseGuards } from '@nestjs/common';
import { AuthGuard } from '@nestjs/passport';
import { AppService } from './app.service';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  getLogin(): string {
    return 'hello';
  }

  @Get('auth/google/callback')
  @UseGuards(AuthGuard('google'))
  googleLoginCallback(@Req() req) {
    return req.user;
  }
}
