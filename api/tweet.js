import { config } from 'dotenv';
import rwClient from '../twitterClient.js';

config();

const SECRET_KEY = process.env.SECRET_KEY;
const TWEET = process.env.TWEET;

const tweet = async () => {
    try {
        await rwClient.v2.tweet(TWEET);
        console.log("Tweeted successfully!");
    } catch (error) {
        console.error(error);
    }
};

export default async function (req, res) {
    if (req.method === 'POST') {
        const providedKey = req.headers['x-secret-key'];
        if (providedKey !== SECRET_KEY) {
            return res.status(403).json({ error: 'Forbidden' });
        }
        
        try {
            await tweet();
            res.status(200).json({ message: 'Tweet has been sent successfully!' });
        } catch (error) {
            console.error(error);
            res.status(500).json({ error: 'Tweet was not sent!' });
        }
    } else {
        res.status(405).json({ error: 'Method Not Allowed' });
    }
};