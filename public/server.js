const http = require('http');

http.createServer((request, response) => {
    const { headers, method, url } = request;
    let body = [];
    request.on('error', (err) => {
        console.error(err);
    }).on('data', (chunk) => {
        body.push(chunk);
    }).on('end', () => {
        body = JSON.stringify(Buffer.concat(body).toString());
        console.log(body);

        response.on('error', (err) => {
            console.error(err);
        });

        response.statusCode = 200;
        response.setHeader('Content-Type', 'application/json');
        response.setHeader('Access-Control-Allow-Origin', '*');

        const responseBody = { body, answer: 'dats it' };

        response.write(JSON.stringify(responseBody));
        response.end();

    });
}).listen(8080);