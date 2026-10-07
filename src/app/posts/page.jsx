import React from 'react';
// option:-2 : 
const postsPromise = async()=>{
    const res= await fetch ('https://jsonplaceholder.typicode.com/posts')
    return res.json();
}

//option:-3 
/**
 * GET: 
 * POST: 
 * UPDATE:
 * DELETE:
 * 
 */
const getPosts = async ()=>{
    const res = await fetch('https://jsonplaceholder.typicode.com/posts');
    return res.json()

}

// option:-4  Try-Catch-Finally
const getPosts2 = async()=>{
    try{
        const res= await fetch('https://jsonplaceholder.typicode.com/posts')
        console.log('Trying... See result in page') // Showing that "Try" Working
         
        return res.json();
    }catch (error){
        throw new Error("Failed to Database Connection ")
    }
    finally{
        console.log("Finished")
    }
}


// option:-5
const getPosts3 = async()=>{
    const res = await fetch('https://jsonplaceholder.typicode.com/posts')
    if(! res.ok){
       throw new Error('Failed to Fetch Data of Post')
    } 
    return res.json();
}
const PostsPage = async() => {
    // const res = await fetch('https://jsonplaceholder.typicode.com/posts');



    // const posts= await res.json();   // Option:- 01
    // const posts=await postsPromise()    // option:-02
    const posts = await getPosts3();

    return (
        <div>
            <h2>Hello Post {posts.length}</h2>
        </div>
    );
};

export default PostsPage;