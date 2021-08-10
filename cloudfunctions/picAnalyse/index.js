// Depends on tencentcloud-sdk-nodejs version 4.0.3 or higher
const tencentcloud = require("tencentcloud-sdk-nodejs");

const TiiaClient = tencentcloud.tiia.v20190529.Client;

const clientConfig = {
  credential: {
    secretId: "",//请填写自己的secretID和Key
    secretKey: "",
  },
  region: "ap-beijing",
  profile: {
    httpProfile: {
      endpoint: "tiia.tencentcloudapi.com",
    },
  },
};

const client = new TiiaClient(clientConfig);

exports.main = async (event, context) => {
  const params = {
    "ImageUrl": event.ImageUrl,
    "ImageBase64":event.ImageBase64
};
  console.log(params)
  return new Promise((resolve, reject) => {
  client.DetectLabel(params).then(
    (data) => {
      console.log(data);
      resolve(data)
    },
    (err) => {
      console.error("error", err);
    }
  );
  })
}