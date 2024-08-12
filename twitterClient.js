import { TwitterApi } from 'twitter-api-v2';

const client = new TwitterApi({
    appKey: process.env.APIKEY,
    appSecret: process.env.APIKEY_SECRET,
    accessToken: process.env.ACCESSTOKEN,
    accessSecret: process.env.ACCESSTOKEN_SECRET,
});

const rwClient = client.readWrite;

export default rwClient;