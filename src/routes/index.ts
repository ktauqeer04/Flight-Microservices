import v1routes from "./v1/index";
import express from "express";

const router = express.Router();

router.use('/v1', v1routes);

export default router;