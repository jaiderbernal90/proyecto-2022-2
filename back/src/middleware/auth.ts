import { IncomingHttpHeaders } from 'http';
import { RequestHandler } from 'express'
import { verifyToken } from '../controllers/authController';


function getTokenFromHeaders(headers: IncomingHttpHeaders) {
  const header = headers.authorization as string

  if (!header)
    return header

  return header.split(' ')[1]
}

export const tokenGuard: (() => RequestHandler) = (() => (req, res, next) => {

  const token = getTokenFromHeaders(req.headers) || req.query.token || req.body.token || ''
  const hasAccess = verifyToken(token)

  hasAccess.then(a => {
    if (!a)
      return res.status(401).send({ message: 'No autorizado' })
    next()
  })
})