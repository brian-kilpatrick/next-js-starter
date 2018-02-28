// 'use strict';
// module.exports = function(sequelize, DataTypes) {
//   var User = sequelize.define('User', {
//     email: DataTypes.STRING,
//     name: DataTypes.STRING
//   });
//   return User;
// };

const DataTypes = require('sequelize');
const Model = require('../sequelize');
const bcrypt = require('bcrypt');

const User = Model.define('User', {
  email: {
    type: DataTypes.STRING(255),
    unique: { msg: "That email is being used already." },
    validate: { isEmail: true },
  },
  firstName: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  lastName: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  password: {
    type: DataTypes.STRING,
    allowNull: false,
  },

}, {
  // indexes: [
  //   { fields: ['email'] },
  // ],

});

// hash
User.beforeCreate((user, opts) => {
  if (!user.password) throw new Error('Password Cannot Be Blank');
  return bcrypt.hash(user.password, 5).then(hash => user.password = hash)
});

User.prototype.isValidPassword = function(pw) {
  return bcrypt.compare(pw, this.password).then(isValid => isValid)
};

User.prototype.toJSON =  function () {
  const values = Object.assign({}, this.get());

  delete values.password;
  return values;
};

module.exports =  User;
