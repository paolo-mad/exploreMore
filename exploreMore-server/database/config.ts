import { createPool } from "mysql2/promise";
import dotenv from "dotenv";

dotenv.config();

const CONFIG = {
    host: process.env.MYSQL_HOST,
    user: process.env.MYSQL_USER,
    password: process.env.MYSQL_PASSWORD,
    database: process.env.MYSQL_DATABASE,
}

export const connection = createPool(CONFIG)


