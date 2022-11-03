import { Request, Response } from 'express';

export const ping = (_req: Request, res: Response) => {
    return res.status(200).json(
        {
            success: true,
            message: "pong"
        }
    )
}
