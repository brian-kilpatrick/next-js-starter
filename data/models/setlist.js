const DataTypes = require('sequelize');
const Model = require('../sequelize');

const Setlist = Model.define('Setlist', {
  name: DataTypes.STRING,
  date: DataTypes.DATE,
  notes: DataTypes.TEXT,
  favorite: DataTypes.BOOLEAN
}, {
  classMethods: {
    associate: function(models) {
      // associations can be defined here
    }
  }
});

module.exports =  Setlist;
