const init = () => {
    
    const router = require('express').Router();
    const home = require('../controllers/home');
    const cotacaoRouter = require('./cotacao');

    router.get('/', home.getIndex);
    router.use('/cotacao', cotacaoRouter());

    return router;
}

module.exports = init 
