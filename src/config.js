export default {
  s3: {
    REGION: "ap-southeast-2",
    BUCKET: "note-uploads-sl"
  },
  apiGateway: {
    REGION: "us-east-1",
    URL: "https://y1yjnp4d7l.execute-api.us-east-1.amazonaws.com/prod/"
  },
  cognito: {
    REGION: "us-east-1",
    USER_POOL_ID: "us-east-1_zI6dfI4JH",
    APP_CLIENT_ID: "7u4cm2e2bj4dvln73a62ft1r4a",
    IDENTITY_POOL_ID: "us-east-1:0565e5ea-0a13-4ad8-829e-f2beeb0c78a5"
  }
};
