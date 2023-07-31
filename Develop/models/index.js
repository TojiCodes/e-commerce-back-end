// Import models
const Product = require('./Product');
const Category = require('./Category');
const Tag = require('./Tag');
const ProductTag = require('./ProductTag');

// Defines relationships
const associations = [
  // Products belongsTo Category
  { target: Category, source: Product, type: 'belongsTo' },

  // Categories have many Products
  { target: Product, source: Category, type: 'hasMany', options: { foreignKey: 'category_id' } },

  // Products belongToMany Tags (through ProductTag)
  { target: Tag, source: Product, type: 'belongsToMany', options: { through: { model: ProductTag } } },

  // Tags belongToMany Products (through ProductTag)
  { target: Product, source: Tag, type: 'belongsToMany', options: { through: { model: ProductTag } } },
];

// Applies associations
associations.forEach(({ source, target, type, options }) => source[type](target, options));

// Exports models
module.exports = {
  Product,
  Category,
  Tag,
  ProductTag,
};
