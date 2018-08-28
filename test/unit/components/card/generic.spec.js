const testHelper = require('../../../helpers/test-helper');

describe('Generic card dust component', function() {
  testHelper.setupBefore()

  it('should return html from the dust component', function(done) {
    testHelper.shunterTest('generic', 'components__card__generic', 'components/card', done)
  });
});
