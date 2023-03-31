import { Controller, Get, Req, Res, HttpStatus, UseGuards } from '@nestjs/common';
import { AuthGuard } from '@nestjs/passport';

@Controller('auth')
export class AuthController {
  @Get('google')
  @UseGuards(AuthGuard('google'))
  async googleLogin(): Promise<any> {
    console.log("From React.js");
  }

  @Get('google/callback')
  @UseGuards(AuthGuard('google'))
  googleLoginCallback(@Req() req, @Res() reply): string {
    console.log(req.user);

    return reply
          .status(HttpStatus.OK)
          .redirect("http://telepia.asianaidt.com/telepia.html");
  }
}
