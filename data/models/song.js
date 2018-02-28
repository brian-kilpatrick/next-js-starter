const DataTypes = require('sequelize');
const Model = require('../sequelize');

const Song = Model.define('Song', {
  title: DataTypes.STRING,
  lyrics: DataTypes.TEXT,
  key: DataTypes.STRING(1),
  bpm: DataTypes.INTEGER,
  length: DataTypes.STRING,
  notes: DataTypes.TEXT,
  favorite: DataTypes.BOOLEAN,
  lastUsed: DataTypes.DATEONLY
}, {
  classMethods: {
    associate: function(models) {
      // associations can be defined here
    }
  }
});

module.exports =  Song;
