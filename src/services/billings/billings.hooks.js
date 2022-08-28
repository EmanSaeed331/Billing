const { authenticate } = require('@feathersjs/authentication').hooks;
const adminBilling = require('../../hooks/admin-billing');
const userBilling = require('../../hooks/user-billing');

module.exports = {
  before: {
    all: [ authenticate('jwt') ,  ],
    find: [adminBilling() , userBilling()],
    get: [adminBilling(), userBilling()],
    create: [adminBilling()],
    update: [adminBilling()],
    patch: [adminBilling()],
    remove: [adminBilling()]
  },

  after: {
    all: [],
    find: [],
    get: [],
    create: [],
    update: [],
    patch: [],
    remove: []
  },

  error: {
    all: [],
    find: [],
    get: [],
    create: [],
    update: [],
    patch: [],
    remove: []
  }
};
