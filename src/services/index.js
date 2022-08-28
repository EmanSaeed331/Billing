const users = require('./users/users.service.js');
const products = require('./products/products.service.js');
// eslint-disable-next-line no-unused-vars
module.exports = function (app) {
  app.configure(users);
  app.configure(products);
};
