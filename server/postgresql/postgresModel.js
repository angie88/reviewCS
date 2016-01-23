var Sequelize = require('sequelize');

var sequelize = new Sequelize('Users', 'AngieYeh', '', {
  host: 'localhost',
  dialect: 'postgres'
});

sequelize.authenticate().then(function(err, data){
  console.log('Connected with postgres')
}).catch(function(){
  console.log(err);
})

var userInfo = sequelize.define('userInfo', {
  username: {
    type: Sequelize.STRING,
    unique: true
  },
  password: {
    type: Sequelize.STRING,
  }
})

var sessionId = sequelize.define('storeSession', {
  ssid: {
    type: Sequelize.STRING,
    unique: true
  }
})

module.exports = { userInfo: userInfo , sessionId: sessionId };
