const DataTypes = require('sequelize');
const Model = require('../sequelize');

const Post = Model.define('Post', {
  title: DataTypes.STRING,
  content: DataTypes.TEXT
}, {
  classMethods: {
    associate: function(models) {
      // associations can be defined here
    }
  }
});

module.exports =  Post;
