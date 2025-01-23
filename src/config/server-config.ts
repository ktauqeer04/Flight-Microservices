import path from "path";
import dotenv from "dotenv";
dotenv.config({ path: path.resolve(__dirname, '../../.env') });

const PORT = process.env.PORT;

export { 
    PORT
}
