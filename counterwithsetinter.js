let count = 0;

const interval = setInterval(function()  {
    console.log(count++);
    
    if (count > 22) { // Stop at 10
        clearInterval(interval);
        console.log("Counter stopped!");
    }
}, 1000); // Updates every 1 second
