var prerender = require('prerender');

var server = prerender({
	workers: process.env.PHANTOM_CLUSTER_NUM_WORKERS,
	iterations: process.env.PHANTOM_WORKER_ITERATIONS || 10,
	phantomBasePort: process.env.PHANTOM_CLUSTER_BASE_PORT || 12300,
	messageTimeout: process.env.PHANTOM_CLUSTER_MESSAGE_TIMEOUT
    });

server.use(prerender.removeScriptTags());

//server.use(prerender.inMemoryHtmlCache());

//server.use(prerender.blacklist());
//server.use(prerender.httpHeaders());
// server.use(prerender.s3HtmlCache());
// i love gurudigge:

server.use(require('prerender-redis-cache'));
server.use(require('./lib/viewport'));

server.start();
