

'use strict';


const koa = require('koa')
const koaRouter = require('koa-router')
const session = require('koa-session');

const app = new koa()
const router = new koaRouter()

app.keys = ['Shh, its a secret!'];
app.use(session(app));  // Include the session middleware


router.get('koala', '/', (ctx)=> {
  var n = ctx.session.views || 0;
  ctx.session.views = ++n;

  if(n === 1)
     ctx.body = 'Welcome here for the first time!';
  else
     ctx.body = "You've visited this page " + n + " times!";
})

router.get('game', '/es', (ctx)=>{
  ctx.body = "Bienvenido"
})

app.use(router.routes())
  .use(router.allowedMethods())

const port= process.env.PORT || 3000
app.listen(port)

/*
const http = require('http');

const hostname = '127.0.0.1';
const port = 3000;

const server = http.createServer((req, res) =>{
  res.statusCode = 200;
  res.setHeader('Content-Type', 'text/plain');
  res.end('Hello World');
});

server.listen(port, hostname, () =>{
  console.log(`Server running at http://${hostname}:${port}/`);
});
*/
