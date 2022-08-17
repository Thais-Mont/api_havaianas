const Produtos = require('../models/Produto');

const findAllProdutosService = async () => {
  const allProdutos = await Produtos.find();
  return allProdutos;
};

const findByIdProdutoService = async (idParam) => {
  const oneProduto = await Produtos.findById(idParam);
  return oneProduto;
};

const createProdutoService = async (newProduto) => {
  const createdProduto = await Produtos.create(newProduto);
  return createdProduto;
};

const updateProdutoService = async (idParam, editProduto) => {
  const updateProduto = await Produtos.findByIdAndUpdate(idParam, editProduto);
  return updateProduto;
};

const deleteProdutoService = async (idParam) => {
  return await Produtos.findByIdAndDelete(idParam);
};

module.exports = {
  findAllProdutosService,
  findByIdProdutoService,
  createProdutoService,
  updateProdutoService,
  deleteProdutoService,
};
