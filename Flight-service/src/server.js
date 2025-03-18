// const { connectQueue } = require('./utils/queue/receiver.js')
// import { createRequire } from 'module';
// const require = createRequire(import.meta.url);
const express = require('express');
const { PORT, logger } = require('./config/index');
const APIRoutes = require('./routes/index');
const cors = require('cors');
const { connectQueue } = require('./utils/queue/receiver.js') 

const app = express();


//***************************** MIDDLEWARES *************************************/
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({extended: true}));

// ******************************************************************************/



app.use('/api', APIRoutes);

app.listen(PORT, async () => {
    console.log(`Process running on port ${PORT}`);
    await connectQueue();
    logger.info("Successfully started the server", "root", {});
});
