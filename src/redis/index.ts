import { createClient } from 'redis';


export const client = createClient({
    url: "redis://default:q5m7tGMwYvCwnPBVnOHxBrWl3sV7nPnI@redis-13819.c10.us-east-1-2.ec2.redns.redis-cloud.com:13819"
});

client.on('error', err => console.log('Redis Client Error', err));

async function connect() {
    await client.connect();
}

connect();