import { createClient } from 'redis';

export const client = createClient({
    url: `redis://default:${process.env.REDIS_PASSWORD}@${process.env.REDIS_PUBLIC_ENDPOINT}`
});

client.on('error', err => console.log('Redis Client Error', err));

async function connect() {
    await client.connect();
}

connect();