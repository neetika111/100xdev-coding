// synchronous vs Asynchronous functions
function findSum(n) {
    let ans = 0;
    for (let i = 0; i<n; i++) {
    ans += i;
    }
    return ans;
    }
    
    function findSumTill100() {
    return console.log(findSum(100));
    }
    
    function asyncDemo(){
    setTimeout(findSumTill100, 1000);
    console.log("hello world prints first!");
    }
    
    function syncDemo(){
    // Busy Waiting
    function syncSleep(){
    let a = 1;
    for(let i = 0; i <= 100; i++);
    a++;
    }
    syncSleep();
    findSumTill100();
    console.log("hello world prints last!");
    }
    
    // Just run functions one by one!
    syncDemo();
    asyncDemo();