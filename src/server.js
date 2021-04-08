const express = require('express')
const server = express()
const routes = require('./routes')

// Configurando a pasta que guarda os templates ou "arquivos de modelo"
// https://expressjs.com/pt-br/guide/using-template-engines.html
server.set('views', `${__dirname}/views`)

// Configura e carrega o template ou "arquivo de modelo" a ser usado
server.set('view engine', 'ejs')

// Usar o req.body
server.use(express.urlencoded({ extended: true }))

server.use(express.static('public'))

server.use(routes)

server.listen(3000, () => console.log('Server iniciado'))