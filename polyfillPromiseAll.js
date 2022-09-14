function promiseAll(promises) {
    let result = [];
    return new Promise((resolve, reject)=> {
        promises.forEach((promise, index)=> {
            promise.then(res => {
                result.push(res);
                if(index === promises.length-1) {
                    resolve(result)
                }
            })
            .catch(err=>reject(err))
        })
    })
}


const promise1 = new Promise((res, rej)=> {
    setTimeout(()=> {
        res('3 sec me Papa kehte hain')
    }, 3000)
})

const promise2 = new Promise((res, rej)=> {
    setTimeout(()=> {
        res('1 sec me Papa kehte hain')
    }, 1000)
})

const promise3 = new Promise((res, rej)=> {
    setTimeout(()=> {
        res('5 sec me Papa kehte hain')
    }, 5000)
})


promiseAll([promise1, promise2, promise3]).then(res=> console.log(res));
