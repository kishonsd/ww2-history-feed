import express from 'express'
import dotenv from 'dotenv'
import { getFeed } from './feed-algo.js'

dotenv.config()
const app = express()
const port = process.env.PORT || 3000

app.get('/xrpc/app.bsky.feed.getFeedSkeleton', async (req, res) => {
  try {
    const feed = await getFeed(req.query)
    res.json(feed)
  } catch (err) {
    console.error(err)
    res.status(500).send('Feed error')
  }
})

app.listen(port, () => {
  console.log(`WWII History feed server running at http://localhost:${port}`)
})
