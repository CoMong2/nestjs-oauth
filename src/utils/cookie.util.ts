// import { FastifyReply, FastifyRequest } from 'fastify';

// export const getCookie = (
//   req: FastifyRequest,
//   key: string,
// ): string | undefined => {
//   if (req.cookies?.[key]) {
//     const unsignedCookie = req.unsignCookie(req.cookies[key]);
//     if (unsignedCookie.valid) {
//       return unsignedCookie.value;
//     }
//   }
// };

// export const setCookie = (
//   reply: FastifyReply,
//   key: string,
//   value: string,
//   maxAge?: number,
// ) => {
//   reply.setCookie(key, value, {
//     httpOnly: true,
//     maxAge: maxAge || 60 * 60, // default 1 hour
//     signed: true,
//     sameSite: 'lax',
//     secure: true,
//     path: '/',
//   });
// };
