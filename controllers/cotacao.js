const result = (req, res) => {

    const convert = require('../lib/convert');
    const { cotacao, quantidade } = req.query;
    
    if (cotacao && quantidade) {
        const conversao = convert.convert(cotacao, quantidade);
        res.render('cotacao', {
            error: false,
            cotacao: convert.toMoney(cotacao),
            quantidade: convert.toMoney(quantidade),
            conversao: convert.toMoney(conversao)
        });
    } else {
        res.render('cotacao', {
            error: 'Valores inválidos!'
        });
    }
}

module.exports = {
    result
}