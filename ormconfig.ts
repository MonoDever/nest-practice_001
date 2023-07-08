import { ConnectionOptions } from "typeorm";

export default{
    type: "mssql",
    host: "localhost",
    username: "sa",
    password: "Mo123456789",
    database: "practiceORM001",
    entities:["dist/**/**.entity{.ts,.js}"],
    synchronize: true,
    extra:{
        trustServerCertificate: true,
    }
} as ConnectionOptions;