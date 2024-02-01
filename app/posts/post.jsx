'use client';
import React , { useEffect , useState }from 'react';
import styles from "./../page.module.css";

const Post = ({ posts , draftMode}) => {

   const [postData , setPostData] = useState(posts);
    console.log('draft',draftMode);
    useEffect(() => {
        setPostData(posts);
    }, [posts]);

    // const changeTitle = (value , id) => {
    //     console.log('post' , value , id);
    //     const newPostData = postData.map(post => {
    //         if(post.id === id){
    //             post.title = value;
    //         }
    //         return post;
    //     });
    //     console.log('newPostData' , newPostData);
    //     localStorage.setItem('draft_posts',JSON.stringify(newPostData));
    // }

    return (
      <>
       <section >
          { postData.map(post => <article key={post.id} data-post-id={post.id} className={styles.card}> 
            <h3 
                //contentEditable="true"
                //suppressContentEditableWarning={true}
                //onInput={(event)=>changeTitle(event.target.innerText , post.id)}
                >{post.title}</h3>
            <p>{post.body}</p>
            </article>
           )}
        </section>
      </>
    );
  };
  
  export default Post;
