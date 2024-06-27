const db = require("../db/conn");
const { DataTypes } = require("sequelize");
const Jogo = require("./Jogo");

const Conquista = db.define("Conquista", {
  titulo: {
    type: DataTypes.STRING,
    required: true,
  },
  descricao: {
    type: DataTypes.STRING,
    required: true,
  }
});

Conquista.belongsTo(Jogo)
Jogo.hasMany(Conquista)


module.exports = Conquista;