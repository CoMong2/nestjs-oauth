import { Controller, Get, Req, Res, HttpStatus, UseGuards } from '@nestjs/common';
import { FastifyReply } from 'fastify';
import { AuthGuard } from '@nestjs/passport';

@Controller('/auth')
export class AuthController {
  @Get('/logout')
  @UseGuards(AuthGuard('google'))
  async Logout(@Res() reply: FastifyReply): Promise<any> {
    return reply.status(HttpStatus.OK)
      .redirect(process.env.REACT_APP_FRONT_PATH + '/logout');
  }   
}
