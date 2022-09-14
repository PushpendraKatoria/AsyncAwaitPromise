const { inherits } = require("util");

const posts = [
    {title:"Post One", body: 'This is post one'},
    {title:"Post two", body: 'This is post two'}
]

const getPosts = () => {
    // let output;
    setTimeout(()=> {
        let output = '';
        console.log("Printing all elements")
        posts.forEach((post,index) => {
            output+=post.title+'  \n';
        });
        console.log(output)
    }, 2000)
    
}

const createPost=(post, callback)=> {
    return new Promise((resolve, reject)=> {
        setTimeout(()=> {
            
            posts.push(post)
            const error = false;
            if(!error)
                resolve()
            else {
                reject("Something went wrong");
            }
            
        }, 2000)
    })
    
}


async function init() {
    await createPost({title:'Post three', body: 'This is post three'});
    getPosts();
}

init().catch(error=> console.log(error));
// getPosts();
// createPost({title:'Post three', body: 'This is post three'})
// .then(getPosts)
// .catch(err=> console.log(err));
