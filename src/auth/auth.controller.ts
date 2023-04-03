import { Controller, Get, Req, Res, HttpStatus, UseGuards } from '@nestjs/common';
import { FastifyReply } from 'fastify';
import { AuthGuard } from '@nestjs/passport';

@Controller('/auth')
export class AuthController {
  @Get('/logout')
  async Logout(@Req() req, @Res() reply: FastifyReply): Promise<any> {
    console.log(reply);
    return reply.status(HttpStatus.FOUND)
      .redirect('http://localhost:3000');
  }   
}
