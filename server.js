const http = require('http');

const hostname = '127.0.0.1';
const port = 3000;

const server = http.createServer((req, res) => {
  /*
  res.statusCode = 200;
  res.setHeader('Content-Type', 'text/plain');
  res.end('Hello World');
*/
    if(req.url==="/"){
      res.end(JSON.stringify({titulo:'pagina inicial'}));
    }else if(req.url==="/banana"){
      res.end(JSON.stringify({titulo:'bananas', img:'https://media.istockphoto.com/id/474935824/pt/foto/minions-brinquedo-isolado-em-fundo-branco.jpg?s=2048x2048&w=is&k=20&c=bOoHADB4CYAJDYBZUvvHZQrn2QxSFzVrbwIRsoLbc5s='}));
    }else{
      res.end(JSON.stringify({titulo:'rota inexistente'}));

    }

});

server.listen(port, hostname, () => {
  console.log(`Server running at http://${hostname}:${port}/`);
});