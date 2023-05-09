const Koa = require("koa");
const koaRouter = require("@koa/router");

const app = new Koa();

const userRouter = new koaRouter({ prefix: "/users" });
userRouter.get("/list", (ctx, next) => {
  ctx.body = "users list";
});

app.use(userRouter.routes());
app.use(userRouter.allowedMethods());

app.listen(8000, () => {
  console.log("coderhub 服务器启动成功 ~");
});
