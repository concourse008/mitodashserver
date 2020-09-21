'use strict';
const Sequelize = require('sequelize');
const sequelize = new Sequelize(
  'postgres://postgres:postgres@localhost/secret_board',
  {
    logging: false,
    operatorsAliases: false 
  });
const Post = sequelize.define('Post', {
  id: {
    type: Sequelize.INTEGER,
    autoIncrement: true,
    primaryKey: true
  },
  name: {
    type: Sequelize.TEXT
  },
  score: {
    type: Sequelize.INTEGER
  }
}, {
    freezeTableName: true,
    timestamps: true
});

Post.sync();
module.exports = Post;