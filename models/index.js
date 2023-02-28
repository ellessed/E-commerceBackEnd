// import models
const Product = require("./Product");
const Category = require("./Category");
const Tag = require("./Tag");
const ProductTag = require("./ProductTag");

// Products belongsTo Category
Product.belongsTo(Category, {
  foreignKey: "category_id",
});
// Categories have many Products
Category.hasMany(Product, {
  foreignKey: "category_id",
  onDelete: "CASCADE",
});
// Products belongToMany Tags (through ProductTag)
// third table is defined to store foreign keys

Product.belongsToMany(Tag, {
  through: ProductTag,
  foreignKey: "product_id",
});

// Tags belongToMany Products (through ProductTag)
Tag.belongsToMany(Product, {
  through: ProductTag,
  foreignKey: "tag_id",
});

// Tags belongToMany Products (through ProductTag)
//store foreignkeys
Tag.belongsToMany(Product, {
  through: {
    model: ProductTag,
    unique: false,
  },
  as: "tag_product",
});
module.exports = {
  Product,
  Category,
  Tag,
  ProductTag,
};
