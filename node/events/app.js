//Import EventEmitter class
const EventEmitter = require("events");

//Create an instance of an EventEmitter
const emitter = new EventEmitter();

// // 1. Define an event listener (addListener).
// emitter.on("greet", () => {
//   console.log("Hello Sameer!!");
// });

// // 2. Trigger (emit) the "greet" event.
// emitter.emit("greet");

//you can also pass argument while emitting.

// // 1. Define an event listener (addListener).
// emitter.on("greet", (username, prof) => {
//   console.log(`Hello ${username}, ${prof}`);
// });

// // 2. Trigger (emit) the "greet" event.
// emitter.emit("greet", "Sameer!", "Frontend Dev");

// but it's best idea to take a single argument as an object.

// 1. Define an event listener (addListener).
emitter.on("greet", (arg) => {
  console.log(`Hello ${arg.username}, ${arg.prof}`);
});

// 2. Trigger (emit) the "greet" event.
emitter.emit("greet", { username: "Sameer!", prof: "Frontend Dev" });
