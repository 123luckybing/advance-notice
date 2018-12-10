const Koa = require('koa');
const serve = require('koa-static');
const Router = require('koa-router');
const path = require('path');
const router = new Router();
const routes = require('./router');
const reactView = require('./middleware/react_view');

const app = new Koa();

// 给koa对象增加一个router属性
Object.defineProperties(app, {
  router: {
    get() {
      return router;
    }
  }
});

// 给koa的上下文ctx对象增加render方法
reactView({
  view: path.resolve(__dirname, './view')
}, app);

routes(app);

app.use(serve(path.resolve(__dirname, '../build')));

app.use(router.routes());

app.on('error', function(err, ctx){
  log.error('server error', err, ctx);
});


module.exports = app;