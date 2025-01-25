const dotenv = require('dotenv');
dotenv.config();

const PORT = process.env.PORT;
console.log(PORT);


module.exports = PORT
