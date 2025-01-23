import { Request, Response } from "express"
import { StatusCodes } from "http-status-codes"

export const info = (req: Request, res: Response) => {
    return res.status(StatusCodes.OK).json({
        success: true,
        message: "API working...",
        data: {},
        error: {}
    });
}

