const Koa = require('koa');
const app = new Koa();

// 把app放进中间件里面
app.use((ctx) => {
  ctx.body = 'Hello world'
});

// 生成服务实例，传入端口号
app.listen(3000,() => {
  console.log('server is running at 3000');
});

// 传入中间件，监听端口，生成服务器实例