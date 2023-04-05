import {
  Controller,
  Get,
  Req,
  Res,
  HttpStatus,
  UseGuards,
} from '@nestjs/common';
import { Response } from 'express';
import { AuthGuard } from '@nestjs/passport';

@Controller('/auth/google')
export class GoogleController {
  @Get('')
  @UseGuards(AuthGuard('google'))
  async googleLogin() {
    console.log('From React.js');
  }

  @Get('/callback')
  @UseGuards(AuthGuard('google'))
  googleLoginCallback(@Req() req, @Res() reply: Response) {
    console.log(req.user);

    reply.cookie('user', req.user, {
      maxAge: 60 * 60,
    });

    return reply
      .status(HttpStatus.OK)
      .redirect('http://localhost:3000/login/callback');
  }
}
