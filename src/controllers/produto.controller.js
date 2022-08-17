const produtosService = require('../services/produto.service');

const findAllProdutosController = async (req, res) => {
  const allprodutos = await produtosService.findAllProdutosService();
  console.log(allprodutos);
  if (allprodutos.length == 0) {
    return res
      .status(404)
      .send({ message: 'Não existem produtos cadastrados!' });
  }
  res.send(allprodutos);
};

const findByIdProdutoController = async (req, res) => {
  const idParam = req.params.id;
  const chosenProduto = await produtosService.findByIdProdutoService(idParam);
  if (!chosenProduto) {
    return res.status(404).send({ message: 'Produto não encontrado' });
  }
  res.send(chosenProduto);
};

const createProdutoController = async (req, res) => {
  const produto = req.body;
  const newProduto = await produtosService.createProdutoService(produto);
  res.status(201).send(newProduto);
};

const updateProdutoController = async (req, res) => {
  const idParam = req.params.id;
  const editProduto = req.body;
  const updatedProduto = await produtosService.updateProdutoService(
    idParam,
    editProduto,
  );
  res.send(updatedProduto);
};

const deleteProdutoController = async (req, res) => {
  const idParam = req.params.id;
  await produtosService.deleteProdutoService(idParam);
  res.send({ message: 'Produto deletado com sucesso!' });
};

module.exports = {
  findAllProdutosController,
  findByIdProdutoController,
  createProdutoController,
  updateProdutoController,
  deleteProdutoController,
};
