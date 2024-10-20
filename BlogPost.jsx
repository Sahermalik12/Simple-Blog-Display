// BlogPost.jsx
import React from 'react';

const BlogPost = ({ title, author, content }) => {
  return (
    <div style={styles.blogPost}>
      <h2>{title}</h2>
      <p><strong>Author:</strong> {author}</p>
      <p>{content.substring(0, 100)}...</p> {/* Display only first 100 characters of content */}
    </div>
  );
};

const styles = {
  blogPost: {
    border: '1px solid #ccc',
    padding: '20px',
    marginBottom: '10px',
    borderRadius: '8px',
    backgroundColor: '#f9f9f9',
  }
};

export default BlogPost;