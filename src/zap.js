'use strict';

var pavlok = require('pavlok-beta-api-login');

pavlok.init(
    '942bf977af18c6104bfb6985ea7c13d61dcdf55ea7532ed292aba2d77095134f',
    '302bb409e9275b005aafd9a5c088e2c2f5d025373941389860d97f3b88eaf51e',
    {
      port: 3001
    }
  );

pavlok.login(function(result, code) {
  if (result) {
    console.log(result, code);
  }
  else {
    console.log('could not log in');
  }
});

let continueShock = false;

function shock() {
  pavlok.zap({
    value: 5,
  });
}


module.exports = {
  shock
};
