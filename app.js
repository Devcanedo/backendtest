const express = require('express');
const app = express();

app.use('/test', (req, res, next) => {
    res.status(200).send({
        mensagem: 'Deu Certo'
    });
});

module.exports = app;