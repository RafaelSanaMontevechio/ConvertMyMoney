const getIndex = async (req, res) => {

    const apiBCB = require('../lib/api.bcb');
    const cotacao = await apiBCB.getCotacao();
    res.render('home', {
        cotacao
    });
}

module.exports = {
    getIndex
}