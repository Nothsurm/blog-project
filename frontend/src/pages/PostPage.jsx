import { Link, useParams } from "react-router-dom"
import { useEffect, useState } from "react"
import Loader from "../components/Loader"
import { Button } from "flowbite-react"

export default function PostPage() {
    const { postSlug } = useParams()
    const [loading, setLoading] = useState(true)
    const [error, setError] = useState(false)
    const [post, setPost] = useState(null)

    useEffect(() => {
        const fetchPost = async () => {
            try {
                setLoading(true)
                const res = await fetch(`/api/post/getposts?slug=${postSlug}`)
                const data = await res.json()
                if (!res.ok) {
                    setError(true)
                    setLoading(false)
                    return;
                } else {
                    setPost(data.posts[0])
                    setLoading(false)
                    setError(false)
                }
            } catch (error) {
                setError(true)
                setLoading(false)
            }
        }
        fetchPost()
    }, [postSlug])

    if (loading) return (
        <div className="flex justify-center items-center min-h-screen">
            <Loader/>
        </div>
    )

  return (
    <main className="p-3 flex flex-col max-w-6xl mx-auto min-h-screen">
        <h1 className="text-3cl mt-10 p-3 text-center font-serif max-w-2xl mx-auto lg:text-4xl">{post && post.title}</h1>
        <Link>
            <Button color='gray' pill size='xs'>{post && post.category}</Button>
        </Link>
    </main>
  )
}
