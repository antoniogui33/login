const http = require('http');
const fs = require('fs');
const dadosDoArquivo = fs.readFileSync('./database.json')
const dadosParse = JSON.parse(dadosDoArquivo)
console.log(dadosParse)


const server = http.createServer((req, res) => {
    const url = req.url;

    switch (url) {
        case '/':
            const file = fs.readFileSync('./index.html');
            res.writeHead(200, { "Content-Type": "text/html" });
            res.end(file)
            break;
        case '/pagina':
            const file2 = fs.readFileSync('./paginaInicial.html');
            res.writeHead(200, { "Content-Type": "text/html" });
            res.end(file2)
            break;
        case '/login.js':
            res.writeHead(200, { "Content-Type": "text/javascript" });
            res.end(fs.readFileSync('./login.js'))
            break;
        case '/style.css':
            res.writeHead(200, { "Content-Type": "text/css" });
            res.end(fs.readFileSync('./style.css'))
            break;
        case '/paginaInicial':
            if (dadosParse === dadosParse) {
                res.writeHead(200, { "Content-Type": "text/html" });
                res.end(fs.readFileSync('./paginaInicial.html'))
                break;
            }
    }
})

server.listen(3000)
//npm init -y