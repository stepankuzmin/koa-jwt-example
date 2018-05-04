const Koa = require("koa");
const crypto = require("crypto");
const koajwt = require("koa-jwt");
const bodyparser = require("koa-bodyparser");
const jwt = require("jsonwebtoken");
const Router = require("koa-router");

const SECRET = process.env.SECRET;
const PASSWORD = process.env.PASSWORD;

const app = new Koa();

app.use(bodyparser());
app.use(koajwt({ secret: SECRET }).unless({ path: "/login", method: "GET" }));

const router = new Router();

router.get("/", async ctx => {
  ctx.body = "this is public";
});

router.post("/login", async ctx => {
  const { password } = ctx.request.body;

  const hash = crypto
    .createHash("sha256")
    .update(password)
    .digest("base64");

  if (hash !== PASSWORD) {
    ctx.throw(401, "Invalid credentials");
  }

  const token = jwt.sign({ foo: "bar" }, SECRET);
  ctx.body = { token };
});

router.post("/", async ctx => {
  const { user } = ctx.state;
  console.log(user);

  ctx.body = "this is private";
});

app.use(router.routes()).use(router.allowedMethods());

app.listen(3000, () => {
  console.log("ON AIR @ http://localhost:3000");
});
