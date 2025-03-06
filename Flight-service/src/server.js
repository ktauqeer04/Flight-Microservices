// const { connectQueue } = require('./utils/queue/receiver.js')
import { createRequire } from 'module';
const require = createRequire(import.meta.url);
const express = require('express');
const { PORT, logger } = require('./config/index');
const APIRoutes = require('./routes/index');
const { connectQueue } = require('./utils/queue/receiver.js') 

const app = express();


//***************************** MIDDLEWARES *************************************/
app.use(express.json());
app.use(express.urlencoded({extended: true}));

// ******************************************************************************/

await connectQueue();


app.use('/api', APIRoutes);

app.listen(PORT, () => {
    console.log(`Process running on port ${PORT}`);
    logger.info("Successfully started the server", "root", {});
});
