const https = require('https')

const promise4 = (options) => { 
    return new Promise((resolve, reject)=> {
   
    const req = https.request(options, res => {
            var body ='';
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
}

const option1 = {
    hostname: 'jsonplaceholder.typicode.com',
    path:'/users',
    method:'GET'
}
const option2 = {
    hostname: 'jsonplaceholder.typicode.com',
    path:'/posts',
    method:'GET'
}

const promise1 = promise4(option1)
const promise2 = promise4(option2)

async function init() {
    const data = await Promise.all([promise1, promise2]);
    console.log(data);
}

const data = function (data) {
    return data;
}

init();