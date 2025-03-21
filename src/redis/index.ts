import { createClient } from 'redis';

export const client = createClient({
    url: "redis://default:IB4Ar175FzoPjRfuWsrjwAWY3qJYd09u@redis-13819.c10.us-east-1-2.ec2.redns.redis-cloud.com:13819"
});

client.on('error', err => console.log('Redis Client Error', err));

async function connect() {
    await client.connect();
}

connect();