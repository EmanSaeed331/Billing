const { authenticate } = require('@feathersjs/authentication').hooks;

const prooduct = require('../../hooks/prooduct');

/* .hook({
  before:{
    find(context) {
      const { query = {} } = context.params;
      context.params.query = query;
      return Promise.resolve(context);
    }
  }
});
 */

module.exports = {
  before: {
    all: [ authenticate('jwt') ],
    find: [prooduct()],
    get: [prooduct()],
    create: [prooduct()],
    update: [prooduct()],
    patch: [prooduct()],
    remove: [prooduct()]
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
