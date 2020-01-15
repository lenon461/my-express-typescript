import dotenv from "dotenv";

dotenv.config();

export default {
    jwtSecret: "@tsback",
    local: {
        username: process.env.DB_USERNAME,
        password: process.env.DB_PASSWORD,
        database: process.env.DB_NAME,
        host: process.env.DB_HOST,
        dialect: process.env.DB_Dialect || undefined,
        operatorsAliases: false,
    },
    aws: {
        username: process.env.AWS_DB_USERNAME,
        password: process.env.AWS_DB_PASSWORD,
        database: process.env.AWS_DB_NAME,
        host: process.env.AWS_DB_HOST,
        dialect: process.env.AWS_DB_Dialect,
        operatorsAliases: false,
    },
};
// production: {
//   username: "root",
//   password: null,
//   database: "database_production",
//   host: "127.0.0.1",
//   dialect: "mysql",
//   operatorsAliases: false,
// },
// }
