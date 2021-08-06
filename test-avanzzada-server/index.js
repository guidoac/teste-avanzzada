const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const fields = require('./static/fields.json')

const port = 5000;
const app = express();

app.use(cors());
app.use(bodyParser.json());

//código para retornar json na rota determinada
app.get('/api/form-fields', (req, res) => {
    res.send(fields._embedded)
})

app.listen(port, () => console.log(`Servidor iniciado na porta ${port}`))