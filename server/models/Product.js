import { DataTypes, STRING } from "sequelize";
import sequelize from "../db.js";

const Product = sequelize.define("Product", {
    id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
    },

    name: {
        type: DataTypes.STRING,
        allowNull: false,
    },

    description: {
        type: DataTypes.STRING,
        allowNull: true,
    },

    price: {
        type: DataTypes.INTEGER,
        allowNull: false,
    },

    // image_url: {
    //     type: DataTypes.STRING,
    //     allowNull: true,
    // }
})
