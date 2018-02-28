const DataTypes = require('sequelize');
const Model = require('../sequelize');

const Comment = Model.define('Comment', {
  content: DataTypes.STRING,
}, {
  classMethods: {
    associate: function(models) {
      // associations can be defined here
    }
  }
});

module.exports =  Comment;
