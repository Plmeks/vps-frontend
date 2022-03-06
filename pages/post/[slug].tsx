import type { NextPage } from 'next'
import React from 'react';

interface Props {
  post: any;
}

const Post: NextPage<Props> = ({ post }) => {
  return (
    <div>
      <h1>{post.title}</h1>
      <p>{post.body}</p>
    </div>
  )
}

export async function getServerSideProps({ params }: any) {
  const slug = params.slug;

  const response = await fetch(`http://localhost:3001/post/${slug}`).catch();
  const post = await response.json();

  return {
    props: {
      post
    },
    notFound: !post
  };
}

export default Post;
