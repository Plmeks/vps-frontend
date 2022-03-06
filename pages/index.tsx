import type { NextPage } from 'next'
import React from 'react';

interface Props {
  posts: any[];
}

const Home: NextPage<Props> = ({ posts }) => {
  return (
    <div>
      <h1>All posts:</h1>
      {posts.map((post) => (
        <React.Fragment key={post.id}>
          <h2><a href={`/post/${post.slug}`}>{post.title}</a></h2>
          <p>{post.body}</p>
          <hr />
        </React.Fragment>
      ))}
    </div>
  )
}

export async function getStaticProps() {
  const response = await fetch('http://localhost:3001/posts');
  const posts = await response.json();

  return {
    props: {
      posts
    }
  };
}

export default Home
