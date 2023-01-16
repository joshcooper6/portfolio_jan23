const PORT = 2345;
const express = require('express');
const app = express();
const client = require('./client');

require('dotenv').config();
app.use(require('cors')());
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.get('/', (req, res) => {

});

function findFirstNonMentionTweet(tweets) {
    for (let i = 0; i < tweets.length; i++) {
        if (!tweets[i].text.startsWith("@")) {
            return tweets[i];
        }
    }
}

app.get('/latestTweet', async (req, res) => {
    try {
        const response = await client.tweets.usersIdTweets(process.env.JOCO_ID)
        res.send(findFirstNonMentionTweet(response.data))
    } catch (err) {
        console.log('Something went wrong', err)
    }
});

app.get('/getTweet', async (req, res) => {
    getTweets(process.env.TWITTER_ID).then((response) => {
        res.send(response)
    });
});

app.listen(PORT, () => {
    console.log(`server listening at ${PORT}`)
});