import { resolve } from "path";
import { Sequelize } from "sequelize-typescript";
import config from "./config/config";

const sequelize = new Sequelize({
    database: config.database,
    dialect: "postgres" || config.dialect,
    host: config.host,
    username: config.username,
    password: config.password,
    storage: ":memory:",
    models: [__dirname + "/models"],
    logging: false,
});
export default sequelize;
