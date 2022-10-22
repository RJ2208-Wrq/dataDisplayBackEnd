const path = require("path");
const fileUtils = require("../utils/file_utils");
module.exports = async (ctx, next) => {
  const url = ctx.request.url;
  let filePath = url.replace("/api", "");
  filePath = "../data" + filePath + ".json";
  filePath = path.join(__dirname, filePath);

  try {
    const content = await fileUtils.getfile(filePath);
    ctx.response.body = content;
    console.log('有客户端请求数据',content)
  } catch (error) {
    const errMsg ={
      message:'文件不存在',
      status:404
    }
    ctx.response.body = errMsg
    console.log('客户端请求数据出错',errMsg)
  }

  await next();
};
