// src/pages/BoardPage.tsx
import { useEffect, useState } from "react"
import { db } from "../../firebase"
import { collection, query, onSnapshot, orderBy } from "firebase/firestore"
import { useSelector } from "react-redux"
import type { RootState } from "../../store"

interface Post {
  id: string
  title: string
  content: string
  authorEmail?: string
  createdAt: string
}

function BoardPage() {
  const [posts, setPosts] = useState<Post[]>([])
  const { user } = useSelector((state: RootState) => state.auth)

  useEffect(() => {
    const q = query(collection(db, "posts"), orderBy("createdAt", "desc"))
    const unsubscribe = onSnapshot(q, (snapshot) => {
      const postList = snapshot.docs.map((doc) => ({
        id: doc.id,
        ...doc.data(),
      })) as Post[]
      setPosts(postList)
    })

    return () => unsubscribe()
  }, [])

  return (
    <div className="max-w-2xl mx-auto mt-10 p-4">
      <h1 className="text-2xl font-bold mb-4">게시판</h1>
      {user ? (
        <a href="/board/create" className="text-blue-500 mb-4 inline-block">
          새 글 작성
        </a>
      ) : (
        <p className="text-gray-500">로그인 후 글을 작성할 수 있습니다.</p>
      )}

      <div className="space-y-4 mt-4">
        {posts.map((post) => (
          <div key={post.id} className="p-4 border rounded">
            <h2 className="font-bold">{post.title}</h2>
            <p>{post.content}</p>
            <p className="text-sm text-gray-500">
              작성자: {post.authorEmail ?? "익명"}
            </p>
          </div>
        ))}
      </div>
    </div>
  )
}

export default BoardPage
