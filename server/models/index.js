// Тут будут отношения сущностей
import Category from "./Category.js";
import User from "./User.js";
import Product from "./Product.js";

Category.hasMany(Product, {
    foreignKey: "category_id",
    as: 'products',
})

Product.belongsTo(Category, {
    foreignKey: "category_id",
    as: 'category'
})

export {
    Category,
    User,
    Product
}