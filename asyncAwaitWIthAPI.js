const https = require('https')

// const promise1 = Promise.resolve("Hello World");
// const promise2 = 20;
// const promise3 = new Promise((resolve, reject)=> {
//     setTimeout(resolve, 2000, "Good bye");
// })


const promise4 = new Promise((resolve, reject)=> {
    const options = {
        hostname: 'jsonplaceholder.typicode.com',
        path:'/users',
        method:'GET'
    }
    const req = https.request(options, res => {
        // console.log("StatusCode: "+ res.statusCode)
        var body = '';
        res.on('data', chunk=> {
            body+=chunk;
        })
    
        res.on('end',()=> {
            if (res.statusCode != 200) {
                reject("Api call failed with response code " + res.statusCode);
              } else {
                resolve(JSON.parse(body))
              }
        })
        
    })
    
    req.on('error', err=> {
        console.log("Ye raha error : "+err)
    })
    
    req.end();
})


async function init() {
    const data = await promise4
    console.log(data)
}

init();




// Promise.all([promise1, promise2, promise3, promise4]).then(res=> console.log(res))