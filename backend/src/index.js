const express = require('express');
const cors = require('cors');
const routes = require('./routes');

const app = express();

app.use(cors(
    // se usar para produção colocar a opção, esse metodo define qual endereço vai acessar a aplicação!!!
    // origin: 'http://ondetahospedado.com.br'
));

app.use(express.json());
app.use(routes);


app.listen(3333);
