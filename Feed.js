
ubuntu@ip-172-31-4-219:~/graphbook/src/client$ cat Feed.js
import React, { useState } from 'react';
import { gql, useQuery, useMutation } from '@apollo/client';

const GET_POSTS = gql`
          {
          posts {
                id
                text
            }
        }
`;




const Feed = () => {
    const [postContent, setPostContent] = useState('');
    const { loading, error, data, fetchMore } = useQuery(GET_POSTS);
    const handleSubmit = (event) => {
        event.preventDefault();
        const newPost = {
            id: posts.length + 1,
            text: postContent,
            user: {
                avatar: '/uploads/avatar1.png',
                username: 'Fake User'
            }
        };
        setPosts([newPost, ...posts]);
        setPostContent('');
    };
    if (loading) return 'Loading...';
    if (error) return `Error! ${error.message}`;

    const { posts } = data;
    return (
        <div className="container">
            <div className="postForm">
                <form onSubmit={handleSubmit}>
                    <textarea value={postContent} onChange={(e) => setPostContent(e.target.value)} placeholder="Write your custom post!"/>
                    <input type="submit" value="Submit" />
                </form>
            </div>
            <div className="feed">
                {posts.map((post, i) =>
                    <div key={post.id} className="post">
                        <div className="header">
                 </div>
                        <p className="content">
                            {post.text}
                        </p>
                    </div>
                )}
            </div>
        </div>
    )
}






export default Feed
