/**
 * React Starter Kit (https://www.reactstarterkit.com/)
 *
 * Copyright © 2014-present Kriasoft, LLC. All rights reserved.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.txt file in the root directory of this source tree.
 */

const Sequelize = require('sequelize');
const config = require('./config/config');
let env = process.env.NODE_ENV || 'development';

const sequelize = new Sequelize(config[env].database, config[env].username, config[env].password, config[env]);

module.exports = sequelize;
