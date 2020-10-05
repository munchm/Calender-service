/* eslint-disable no-console */
const http = require('http');
const httpProxy = require('http-proxy');

const proxyServer = httpProxy.createProxyServer({});
// app.use('/', express.static(path.join(__dirname, '../client')));

proxyServer.on('proxyReq', ((proxyReq, req, res, options) => {
  proxyReq.setHeader('X-Special-Proxy-Header', 'foobar');
}));

http.createServer((req, res) => {
  proxyServer.web(req, res, {
    target: 'http://127.0.0.1:2050',
  });
}).listen(2000, () => {
  console.log(`Proxy server is running on port ${2000}`);
});
