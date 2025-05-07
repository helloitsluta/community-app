import { useState } from "react"
import { useNavigate } from "react-router-dom"
import { useSelector } from "react-redux"
import { db } from "../../firebase"
import { addDoc, collection, serverTimestamp } from "firebase/firestore"
import type { RootState } from "../../store"

function CreatePostPage() {
  const [title, setTitle] = useState("")
  const [content, setContent] = useState("")
  const [error, setError] = useState<string | null>(null)
  const { user } = useSelector((state: RootState) => state.auth)
  const navigate = useNavigate()

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setError(null)

    if (!title.trim() || !content.trim()) {
      setError("제목과 내용을 모두 입력해야 합니다.")
      return
    }

    if (!user) {
      setError("로그인 후 글을 작성할 수 있습니다.")
      navigate("/login")
      return
    }

    try {
      await addDoc(collection(db, "posts"), {
        title,
        content,
        authorEmail: user.email,
        createdAt: serverTimestamp(),
      })
      navigate("/board")
    } catch (err) {
      console.error("Error creating post:", err)
      setError("게시글 작성 중 문제가 발생했습니다.")
    }
  }

  return (
    <div className="max-w-lg mx-auto mt-10 p-4">
      <h1 className="text-2xl font-bold mb-4">새 글 작성</h1>
      {error && <p className="text-red-500 text-center mb-4">{error}</p>}

      <form onSubmit={handleSubmit} className="space-y-4">
        <input
          type="text"
          placeholder="제목"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          required
          className="w-full px-3 py-2 border rounded"
        />
        <textarea
          placeholder="내용"
          value={content}
          onChange={(e) => setContent(e.target.value)}
          required
          className="w-full px-3 py-2 border rounded h-40"
        />
        <button
          type="submit"
          className="w-full bg-blue-600 text-white py-2 rounded"
        >
          글 작성
        </button>
      </form>
    </div>
  )
}

export default CreatePostPage
