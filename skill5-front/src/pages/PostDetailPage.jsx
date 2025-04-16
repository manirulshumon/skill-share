import { useEffect, useState } from 'react'
import { useParams, Link } from 'react-router-dom'
import axios from 'axios'

export default function PostDetailPage() {
  const { id } = useParams()
  const [post, setPost] = useState(null)
  const [error, setError] = useState('')

  useEffect(() => {
    const fetchPost = async () => {
      try {
        const response = await axios.get(import.meta.env.VITE_BACKEND_URL + `/api/posts/${id}`)
        if (!response.data) throw new Error('Post not found')
        setPost(response.data)
      } catch (err) {
        setError(err.message)
      }
    }
    fetchPost()
  }, [id])


  return (
    <div className="p-4">
      <Link to="/" className="text-blue-500">Back</Link>

      <h1 className="text-2xl my-4">{post?.title}</h1>
      <p className="mb-4">{post?.description}</p>

      <div>
        <h2 className="font-bold mb-2">Details</h2>
        <p>Location: {post?.province}</p>
        <p> Date: {post?.availability?.date
          ? new Date(post.availability.date).toLocaleDateString()
          : 'Date not specified'}
        </p>
        <p> Time: {post?.availability?.time}</p>
      </div>

      <div className="mt-4">
        <h2 className="font-bold">Contact:</h2>
        <p> {post?.contact?.email}</p>
      </div>
    </div>
  );
}