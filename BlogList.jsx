// BlogList.jsx
import React from 'react';
import BlogPost from './BlogPost';

const BlogList = () => {
  const blogPosts = [
    {
      title: 'Learning React Basics',
      author: 'John Doe',
      content: 'React is a powerful JavaScript library for building user interfaces. It allows you to build reusable components and manage the state of your application effectively...'
    },
    {
      title: 'Understanding React Hooks',
      author: 'Jane Smith',
      content: 'React hooks are functions that let you "hook into" React state and lifecycle features from function components...'
    },
    {
      title: 'State Management in React',
      author: 'Alice Johnson',
      content: 'Managing state is a key aspect of building React applications. In this blog, we’ll discuss the use of context API and third-party libraries like Redux...'
    }
  ];

  return (
    <div style={styles.blogList}>
      <h1>Blog Posts</h1>
      {blogPosts.map((post, index) => (
        <BlogPost 
          key={index} 
          title={post.title} 
          author={post.author} 
          content={post.content} 
        />
      ))}
    </div>
  );
};

const styles = {
  blogList: {
    maxWidth: '800px',
    margin: '0 auto',
    padding: '20px',
  }
};

export default BlogList;