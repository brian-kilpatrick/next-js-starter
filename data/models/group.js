const DataTypes = require('sequelize');
const Model = require('../sequelize');

const Group = Model.define('Group', {
  name: DataTypes.STRING,
  location: DataTypes.STRING
}, {
  classMethods: {
    associate: function(models) {
      // associations can be defined here
    }
  }
});

module.exports =  Group;
