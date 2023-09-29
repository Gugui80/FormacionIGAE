const http = require('http');
var url = require('url');

initIgae = () => {
    onHttpRequest = (request, response) => {
        console.log('Petición entrante');
        
        let rutaSeleccionada = url.parse(request.url).pathname;
        response.writeHead(200, {'Content-Type': 'text/html'});
        response.write('Hola Mundo Servidor Node');
        response.write('<br>');
        response.write('Ruta seleccionada: ' + rutaSeleccionada);
        response.end();
    }

    http.createServer(onHttpRequest).listen(2395);

    console.log('Servidor corriendo en puerto 2395');
}

exports.initIgaeApp = initIgae;