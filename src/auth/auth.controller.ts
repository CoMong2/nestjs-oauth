import { Controller, Get, Req, Res, HttpStatus } from '@nestjs/common';
import { FastifyReply } from 'fastify';

@Controller('/auth')
export class AuthController {
  @Get('/logout')
  async Logout(@Req() req, @Res() reply: FastifyReply): Promise<any> {
    console.log(reply);
    return reply.status(HttpStatus.FOUND).redirect('http://localhost:3000');
  }
}
