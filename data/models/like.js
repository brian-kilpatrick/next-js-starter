const DataTypes = require('sequelize');
const Model = require('../sequelize');

const Like = Model.define('Like', {
  name: DataTypes.STRING
}, {
  classMethods: {
    associate: function(models) {
      // associations can be defined here
    }
  }
});

module.exports =  Like;

