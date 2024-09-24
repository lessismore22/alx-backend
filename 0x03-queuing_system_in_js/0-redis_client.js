#!/usr/bin/yarn dev
// Import the redis library
import redis from 'redis';

// Create a Redis client
const client = redis.createClient();

// Event: Successful connection
client.on('connect', () => {
  console.log('Redis client connected to the server');
});

// Event: Connection error
client.on('error', (err) => {
  console.log(`Redis client not connected to the server: ${err.message}`);
});

