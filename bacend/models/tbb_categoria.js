'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class tbb_categoria extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  tbb_categoria.init({
    nombre: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'tbb_categoria',
  });
  return tbb_categoria;
};