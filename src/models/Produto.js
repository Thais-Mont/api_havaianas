const mongoose = require('mongoose');

const ProdutoSchema = new mongoose.Schema({
  titulo: {
    type: String,
    required: true
  },
  descricao: {
    type: String,
    required: true
  },
  foto1: {
    type: String,
    required: true
  },
  preco: {
    type: Number,
    required: true
  },

});

const Produto = mongoose.model('api-havainas', ProdutoSchema);

module.exports = Produto;


