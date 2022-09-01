const promise = new Promise((resolve, reject)=> {
    console.log("Promise call kiya hai")
    setTimeout(() => {
        resolve({name:"Pushpendra"});
    }, 2000);
})

promise.then(user=> {
    console.log("Promise ka result aa gaya hai "+ user.name);
})


// const yt = new Promise(resolve => {
//     console.log("Getting result from youtube");
//     setTimeout(()=> {
//         console.log("Got the result frm youtube");
//         resolve({videos:[1,2,3,4,5]});
//     }, 2000);
// })

// const fb = new Promise(resolve => {
//     console.log("Getting result from fb");
//     setTimeout(()=> {
//         console.log("Got the result frm fb");
//         resolve({videos:[9,8,2,8,5]});
//     }, 2000);
// })

// Promise.all([yt, fb]).then(result=> console.log(result))