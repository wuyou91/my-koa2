const Koa = require('koa');
const app = new Koa();

// logger

app.use(async (ctx, next) => {
  await next();
  const rt = ctx.state.time;
  console.log(`${ctx.method} ${ctx.url} - ${rt}ms`);
});

// x-response-time

app.use(async (ctx, next) => {
  const start = Date.now();
  await next();
  ctx.state.time = Date.now() - start;;
});

// response

app.use(async ctx => {
  ctx.body = 'Hello 1222';
  console.log('1123')
});

app.listen(3000)

console.log('[demo] start-quick is starting at port 3000')