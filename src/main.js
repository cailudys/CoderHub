const Koa = require("koa");

const app = new Koa();

app.use((ctx, next) => {
  ctx.body = "服务器访问成功";
});

app.listen(8000, () => {
  console.log("coderhub 服务器启动成功 ~");
});
