const DataTypes = require('sequelize');
const Model = require('../sequelize');

const SetlistSongs = Model.define('SetlistSongs', {
  index: DataTypes.INTEGER
}, {
  classMethods: {
    associate: function(models) {
      // associations can be defined here
    }
  }
});

module.exports =  SetlistSongs;
