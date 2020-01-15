import { resolve } from "path";
import { Sequelize } from "sequelize-typescript";
import config from "./config/config";

const aws = config.aws;
const sequelize = new Sequelize({
    database: aws.database,
    dialect: "postgres" || aws.dialect,
    host: aws.host,
    username: aws.username,
    password: aws.password,
    storage: ":memory:",
    models: [__dirname + "/models"],
    logging: false,
    dialectOptions: {
        connectTimeout: 60000,
    },
});
export default sequelize;
