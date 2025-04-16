import React from 'react'
import { useEffect, useState } from 'react'
import PostCard from '../components/PostCard'
import axios from 'axios'

const HomePage = () => {
    const [posts, setPosts] = useState([])
    const [loading, setLoading] = useState(true)

    useEffect(() => {
        const fetchPosts = async () => {
            try {
                const response = await axios.get(import.meta.env.VITE_BACKEND_URL + "/api/posts")
                setPosts(response.data)
            } catch (error) {
                console.error('Error fetching posts:', error)
            } finally {
                setLoading(false)
            }
        }

        fetchPosts()
    }, [])

    if (loading) {
        return (
            <div className="text-center py-12">
                <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-600 mx-auto"></div>
            </div>
        )
    }

    return (
        <main className="min-h-screen">
            <div className="container mx-auto px-4 py-8">
                <h1 className="text-3xl font-bold mb-8 text-gray-800">Latest Community Offers & Requests</h1>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {posts.map(post => (
                        // {console.log(post)}
                        <PostCard key={post._id} post={post} />
                        ))}
                </div>
            </div>
        </main>
    )
}

export default HomePage