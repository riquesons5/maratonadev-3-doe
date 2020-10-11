// configurando o servidor
const express = require("express")
const server = express()

//configurar o servidor para apresentar arquivos estáticos
server.use(express.static('public'))

//configurando a template engine
const nunjucks = require("nunjucks")
nunjucks.configure("./", {
    express: server,
    noCache: true,
})

// lista de doadores: Array
const donors = [{
        name: "Diego Fernandes",
        blood: "AB+"
    },
    {
        name: "Cleiton Souza",
        blood: "A+"
    },
    {
        name: "Robson Marques",
        blood: "O+"
    },
    {
        name: "Mayk Brito",
        blood: "A-"
    },
]

//configurar a apresentação da página
server.get("/", function(req, res) {
    return res.render("index.html", { donors })
})

//ligar o servidor e permitir o acesso a porta 3000
server.listen(3000, function() {
    console.log("Iniciei o servidor")
})