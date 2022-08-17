const router = require('express').Router();
const controllerProdutos = require('../controllers/produto.controller');
const {
  validId,
  validObjectBody,
} = require('../middlewares/produto.middlewares');

router.get('/', controllerProdutos.findAllProdutosController);

router.get('/produto/:id', validId, controllerProdutos.findByIdProdutoController);
router.post(
  '/create',
  // validObjectBody,
  controllerProdutos.createProdutoController,
);
router.put(
  '/update/:id',
  validId,
  validObjectBody,
  controllerProdutos.updateProdutoController,
);
router.delete(
  '/delete/:id',
  validId,
  controllerProdutos.deleteProdutoController,
);

module.exports = router;
