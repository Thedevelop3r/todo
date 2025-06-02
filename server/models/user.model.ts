import { Model, DataTypes } from "sequelize";
import { sequelize } from "../db.config"; // your Sequelize instance

export class User extends Model {
    declare id: number;
    declare email: string;
    declare password: string;
}

User.init(
    {
        id: {
            type: DataTypes.INTEGER,
            autoIncrement: true,
            primaryKey: true,
        },
        email: {
            type: DataTypes.STRING,
            allowNull: false,
            unique: true,
        },
        password: {
            type: DataTypes.STRING,
            allowNull: false,
        },
    },
    {
        sequelize,
        modelName: "User",
        tableName: "users",
    }
);

sequelize.sync();