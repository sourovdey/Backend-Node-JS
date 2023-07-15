let EventEmitterr = require('events');

let emitter = new EventEmitterr();

emitter.on("done", () =>{
    console.log("20,000 tk")
})

// emitter.emit("done");

setTimeout(()=>{

    emitter.emit("done");

}, 3000)