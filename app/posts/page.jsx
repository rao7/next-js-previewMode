
import Head from 'next/head';
import styles from "./../page.module.css";
import Post from './post';
import { draftMode } from 'next/headers';


async function getData()  {
  const res = await fetch('https://mocki.io/v1/52f29df3-8f35-488d-9b90-a019fd3352fa'); // published posts
  const draftRes = await fetch('https://mocki.io/v1/18f828d1-65af-400a-8324-449607424d1f'); // draft posts
  const { isEnabled } = draftMode();
  if (!res.ok) {
    // This will activate the closest `error.js` Error Boundary
    throw new Error('Failed to fetch data')
  }
  if(isEnabled){
    return draftRes.json();
  }else{
    return res.json();
  }
}

export default async function Posts () {
  let data = await getData();
  data = data.slice(0,3);
  const { isEnabled } = draftMode();
 


  return (
    <main className={styles.main}>
      <Head>
        <title>Posts</title>
        
      </Head>
      <h1>{isEnabled ? 'Preview Posts': 'Published Posts'}</h1>
      <br/>
      <div className={styles.grid}>
        <Post posts={data} draftMode={isEnabled} />
      </div>
      
    </main>
  );
};
