import dotenv from 'dotenv';
dotenv.config();

import pkg from '@atproto/api';
const { BskyAgent } = pkg;

async function createFeed() {
  const agent = new BskyAgent({ service: 'https://bsky.social' });
  await agent.login({
    identifier: process.env.BGS_HANDLE,
    password: process.env.BGS_PASSWORD,
  });

  const result = await agent.com.atproto.admin.createFeed({
    name: 'WWII Daily Feed',
    description: 'Daily historical posts about WWII',
    feedType: 'generator',
  });

  console.log('Your Feed DID is:', result.data.did);
}

createFeed().catch(console.error);
