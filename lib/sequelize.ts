import { config } from "dotenv";
import { resolve } from "path";
import { Sequelize } from "sequelize-typescript";

config({ path: resolve(__dirname, "../.env") });
const sequelize =  new Sequelize({
    database: process.env.DB_NAME,
    dialect: "postgres",
    host: "192.168.90.200",
    username: "postgres",
    password: "nodejs15",
    storage: ":memory:",
    models: [__dirname + "/models"],
    logging: false,
});
export default sequelize;
