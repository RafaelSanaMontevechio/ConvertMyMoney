const app = require('./app')();

const port = process.env.PORT || 3000;

app.listen(port, (err) => {
  if (err) {
    console.log('Não foi possivel iniciar');
  } else {
    console.log('ConvertMyMoney está rodando');
  }
});
