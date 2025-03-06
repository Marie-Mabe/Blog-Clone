import { Redis } from '@upstash/redis'

export const redis = new Redis({
  url: 'https://upright-cat-36126.upstash.io',
  token: process.env.REDIS_TOKEN,
  
})

