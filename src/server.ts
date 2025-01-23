import express, { Request, Response } from "express";
import { PORT, logger } from "./config/index";
import APIRoutes from "./routes/index";

const app = express();

app.use('/api', APIRoutes);

app.listen(PORT, () => {
    console.log(`process running on port ${PORT}`);
    logger.info("Successfully started the server", "root", {});
})
