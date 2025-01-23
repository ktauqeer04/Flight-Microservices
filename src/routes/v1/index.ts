import express, { Request, Response } from "express";
import { StatusCodes } from "http-status-codes";
import { infoController }  from "../../controllers/index";

const router = express.Router();

router.get('/temp', infoController);

export default router;

