const posts = [
    {title:"Post One", body: 'This is post one'},
    {title:"Post two", body: 'This is post two'}
]

const getPosts = () => {
    // let output;
    setTimeout(()=> {
        let output = '';
        posts.forEach((post,index) => {
            output+=post.title+'  \n';
        });
        console.log(output)
    }, 2000)
    
}

const createPost=(post)=> {
    setTimeout(()=> {
        posts.push(post)
    }, 1000)
}

getPosts();
createPost({title:'Post three', body: 'This is post three'});
