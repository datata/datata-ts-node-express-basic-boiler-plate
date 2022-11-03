import express from 'express';

export const ping = (_req: express.Request, res: express.Response) => {
    return res.status(200).json(
        {
            success: true,
            message: "pong"
        }
    )
}
