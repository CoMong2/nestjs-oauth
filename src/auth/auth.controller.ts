import { Controller, Req, Res, HttpStatus, Get } from '@nestjs/common';
import { Request, Response } from 'express';

@Controller('/auth')
export class AuthController {
  @Get('/logout')
  async Logout(@Req() req: Request, @Res() reply: Response) {
    return reply.status(HttpStatus.FOUND).redirect('http://localhost:3000');
  }
}
