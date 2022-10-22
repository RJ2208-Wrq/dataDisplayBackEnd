module.exports = async (ctx, next) => {
  const contextType = "application/json; charset=utf-8";
  ctx.set("Content-Type", contextType);
  ctx.set("Access-Control-Allow-Origin", "*");
  ctx.set("Access-Control-Allow-Methods", "OPTIONS,GET,POST,DELETE");
  await next();
};
