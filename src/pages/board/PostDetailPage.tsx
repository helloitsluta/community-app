import { useEffect, useState } from "react"
import { useParams, useNavigate, Link } from "react-router-dom"
import { db } from "../../firebase"
import { doc, getDoc, deleteDoc } from "firebase/firestore"
import { useSelector } from "react-redux"
import type { RootState } from "../../store"
import type Post from "./types/Post"

function PostDetailPage() {
  const { postId } = useParams()
  const [post, setPost] = useState<Post | null>(null)
  const [error, setError] = useState<string | null>(null)
  const { user } = useSelector((state: RootState) => state.auth)
  const navigate = useNavigate()

  useEffect(() => {
    const fetchPost = async () => {
      try {
        const postDoc = await getDoc(doc(db, "posts", postId as string))
        if (postDoc.exists()) {
          const postData = postDoc.data() as Post
          postData.id = postDoc.id
          setPost(postData)
        } else {
          setError("게시글을 찾을 수 없습니다.")
          navigate("/board")
        }
      } catch (err) {
        console.error("Error fetching post:", err)
        setError("게시글을 불러오는 중 문제가 발생했습니다.")
      }
    }
    fetchPost()
  }, [postId, navigate])

  const handleDelete = async () => {
    if (!window.confirm("정말로 삭제하시겠습니까?")) return

    try {
      await deleteDoc(doc(db, "posts", postId as string))
      navigate("/board")
    } catch (err) {
      console.error("Error deleting post:", err)
      setError("게시글 삭제 중 문제가 발생했습니다.")
    }
  }

  if (error) {
    return <p className="text-red-500 text-center">{error}</p>
  }

  if (!post) {
    return <p className="text-center">Loading...</p>
  }

  return (
    <div className="max-w-2xl mx-auto mt-10 p-4">
      <h1 className="text-2xl font-bold">{post.title}</h1>
      <p className="mt-2">{post.content}</p>
      <p className="text-sm text-gray-500 mt-4">작성자: {post.authorEmail}</p>

      {user?.email === post.authorEmail && (
        <div className="mt-4 space-x-4">
          <Link to={`/board/${postId}/edit`} className="text-blue-500">
            수정
          </Link>
          <button onClick={handleDelete} className="text-red-500">
            삭제
          </button>
        </div>
      )}
    </div>
  )
}

export default PostDetailPage
