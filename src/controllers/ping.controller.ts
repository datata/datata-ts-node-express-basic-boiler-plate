import { Request, Response } from 'express'

export interface apiResponse {
  success: Boolean
  message: String
}
export const ping = (_req: Request, res: Response): Response<JSON> => {
  const result: apiResponse = {
    success: true,
    message: 'pong'
  }

  return res.status(200).json(result);
}
