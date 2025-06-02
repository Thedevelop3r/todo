import { Sequelize } from 'sequelize';
import pg from 'pg';


const sequelize = new Sequelize(process.env.DATABASE_URL!, {
    dialect: "postgres",
    logging: false,
    dialectModule: pg
});

export {
    sequelize,
};