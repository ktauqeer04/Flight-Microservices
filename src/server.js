const express = require('express');
const { PORT, logger } = require('./config/index');
const APIRoutes = require('./routes/index');

const app = express();

app.use('/api', APIRoutes);

app.listen(PORT, () => {
    console.log(`Process running on port ${PORT}`);
    logger.info("Successfully started the server", "root", {});
});
