const app = require('../../src/app');

describe('\'billings\' service', () => {
  it('registered the service', () => {
    const service = app.service('billings');
    expect(service).toBeTruthy();
  });
});
