const promise = new Promise((resolve, reject)=> {
    console.log("Promise call kiya hai")
    setTimeout(() => {
        resolve({name:"Pushpendra"});
    }, 2000);
})

promise.then(user=> {
    console.log("Promise ka result aa gaya hai "+ user.name);
})