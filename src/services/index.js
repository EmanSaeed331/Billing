const users = require('./users/users.service.js');
const products = require('./products/products.service.js');
const billings = require('./billings/billings.service.js');
const admin = require('./admin/admin.service.js');
// eslint-disable-next-line no-unused-vars
module.exports = function (app) {
  app.configure(users);
  app.configure(products);
  app.configure(billings);
  app.configure(admin);
};
