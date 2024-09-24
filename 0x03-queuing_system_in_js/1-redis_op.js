#!/usr/bin/yarn dev
import redis from 'redis';

// Create a Redis client
const client = redis.createClient();

//Event: successful connection
client.on('connect', () => {
  console.log('Redis client connected to the server');
});

// Event: Connection error
client.on('error', (err) => {
  console.log(`Redis client not connected to the server: ${err.message}`);
});

//Function to swt a new school in Redis
function setNewSchool(schoolName, value) {
   client.SET(schoolName, value, redis.print);
}

// Function to display the value of a school from Redis
function displaySchoolValue(schoolName) {
  client.get(schoolName, (err, reply) => {
     if (err) {
      console.log(err);
    } else {
      console.log(reply);  // Log the value retrieved from Redis
    }
  });
}

