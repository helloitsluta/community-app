import { useEffect, useState } from "react"
import { useParams, useNavigate } from "react-router-dom"
import { db } from "../../firebase"
import { doc, getDoc, updateDoc } from "firebase/firestore"
import { useSelector } from "react-redux"
import type { RootState } from "../../store"
import { setError } from "../../features/auth/authSlice"

function EditPostPage() {
  const { postId } = useParams()
  const [title, setTitle] = useState("")
  const [content, setContent] = useState("")
  const { user } = useSelector((state: RootState) => state.auth)
  const navigate = useNavigate()

  useEffect(() => {
    const fetchPost = async () => {
      try {
        const postDoc = await getDoc(doc(db, "posts", postId as string))
        if (postDoc.exists()) {
          const data = postDoc.data()
          if (user?.email !== data.authorEmail) {
            setError("수정 권한이 없습니다.")
            navigate("/board")
            return
          }
          setTitle(data.title)
          setContent(data.content)
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
  }, [postId, user, navigate])

  const handleUpdate = async (e: React.FormEvent) => {
    e.preventDefault()
    await updateDoc(doc(db, "posts", postId as string), { title, content })
    navigate(`/board/${postId}`)
  }

  return (
    <div className="max-w-lg mx-auto mt-10 p-4">
      <h1 className="text-2xl font-bold mb-4">게시글 수정</h1>
      <form onSubmit={handleUpdate} className="space-y-4">
        <input
          type="text"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          required
          className="w-full px-3 py-2 border rounded"
        />
        <textarea
          value={content}
          onChange={(e) => setContent(e.target.value)}
          required
          className="w-full px-3 py-2 border rounded h-40"
        />
        <button
          type="submit"
          className="w-full bg-blue-600 text-white py-2 rounded"
        >
          수정 완료
        </button>
      </form>
    </div>
  )
}

export default EditPostPage
