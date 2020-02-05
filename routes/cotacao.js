const init = () => {
    
    const router = require('express').Router();

    const cotacaoController = require('../controllers/cotacao');

    router.get('', cotacaoController.result);

    return router;

}

module.exports = init