//? Create at least four custom events (e.g., user-login, user-logout, user-purchase,profile-update).
//? Emit these events multiple times with different arguments (e.g., username, itempurchased).
//? Track and store the count of each event type.
//? Define a summary event that logs a detailed report of how many times each event was triggered.

//Import EventEmitter class
const { log } = require("console");
const EventEmitter = require("events");

//Create an instance of an EventEmitter
const emitter = new EventEmitter();

const eventCounts = {
  "user-login": 0,
  "user-logout": 0,
  "user-purchase": 0,
  "profile-update": 0,
};

emitter.on("user-login", (username) => {
  eventCounts["user-login"]++;
  console.log(`${username} logged in!`);
});

emitter.on("user-purchase", (username, item) => {
  eventCounts["user-purchase"]++;
  console.log(`${username} purchased ${item}`);
});

emitter.on("profile-update", (username, field) => {
  eventCounts["profile-update"]++;
  console.log(`${username} updated their ${field}`);
});

emitter.on("user-logout", (username) => {
  eventCounts["user-logout"]++;
  console.log(`${username} was logged out`);
});

emitter.on("Summary", () => {
  console.log(eventCounts);
});

// Emit events
emitter.emit("user-login", "Sameer");
emitter.emit("user-purchase", "Sameer", "Phone");
emitter.emit("profile-update", "Sameer", "email");
emitter.emit("user-logout", "Sameer");

// SHow the Summary
emitter.emit("Summary");
