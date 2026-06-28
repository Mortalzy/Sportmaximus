import { DataTypes } from "sequelize";
import sequelize from "../db.js";

const Category = sequelize.define("Category", {
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
    },

    name: {
        type: DataTypes.STRING,
        unique: true,
        allowNull: false,
    },

    description: {
        type: DataTypes.STRING,
        allowNull: true,
    }
})

export default Category