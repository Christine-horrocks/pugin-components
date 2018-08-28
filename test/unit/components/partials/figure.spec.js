const testHelper = require('../../../helpers/test-helper');

describe('Figure dust component', function() {
  testHelper.setupBefore()

  it('should return html from the dust component', function(done) {
    testHelper.shunterTest('figure', 'components__partials__figure', 'components/partials', done)
  });
});
