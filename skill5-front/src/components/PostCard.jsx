import React from 'react'
import { Link } from 'react-router-dom';

const PostCard = ({ post }) => {
    return (
        <Link to={`/posts/${post._id}`}>
            <div className="border rounded-lg p-4">
                <h3 className="text-xl font-bold mb-2">{post.title}</h3>
                <p className="text-gray-600 mb-2">{post.description}</p>

                <div className="flex items-center text-sm text-gray-500 mb-2">
                    <span className="mr-2"> {new Date(post.availability.date).toLocaleDateString()}</span>
                    <span>{post.availability.time}</span>
                </div>

                <div className="flex justify-between items-center">

                    <span className="bg-blue-100 text-blue-800 px-2 py-1 rounded">
                        {post.province}
                    </span>

                    <span className="text-sm">{post.contact.email}</span>
                </div>
            </div>
        </Link >
    );
}
export default PostCard