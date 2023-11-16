'use strict';
const { Model } = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class CategoryQuestion extends Model {
    static associate({ Question }) {
      this.hasMany(Question, { foreignKey: 'categoryId' });
    }
  }
  CategoryQuestion.init(
    {
      title: {
        allowNull: false,
        type: DataTypes.TEXT,
      },
    },
    {
      sequelize,
      modelName: 'CategoryQuestion',
    }
  );
  return CategoryQuestion;
};
