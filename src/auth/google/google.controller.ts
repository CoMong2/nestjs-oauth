import { Controller, Get, Req, Res, HttpStatus, UseGuards } from '@nestjs/common';
import { AuthGuard } from '@nestjs/passport';

@Controller('/auth/google')
export class GoogleController {
  
  @Get('')
  @UseGuards(AuthGuard('google'))
  async googleLogin(): Promise<any> {
    console.log("From React.js");
  }  

  @Get('/callback')
  @UseGuards(AuthGuard('google'))
  googleLoginCallback(@Req() req, @Res() reply): string {
    console.log(req.user);

    return reply
          .status(HttpStatus.OK)
          .redirect('http://localhost:3000/login/callback');
  }
}
