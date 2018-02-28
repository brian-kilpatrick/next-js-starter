const DataTypes = require('sequelize');
const Model = require('../sequelize');

const Tag = Model.define('Tag', {
  name: {
    type: DataTypes.STRING,
    primaryKey: true,
    allowNull: false,
    unique: true
  }
}, {
  classMethods: {
    associate: function(models) {
      // associations can be defined here
    }
  }
});

module.exports =  Tag;

