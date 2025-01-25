const express = require('express');
const { PORT, logger } = require('./config/index');
const APIRoutes = require('./routes/index');

const app = express();


//***************************** MIDDLEWARES *************************************/
app.use(express.json());
app.use(express.urlencoded({extended: true}));

// ******************************************************************************/


app.use('/api', APIRoutes);

app.listen(PORT, () => {
    console.log(`Process running on port ${PORT}`);
    logger.info("Successfully started the server", "root", {});
});
