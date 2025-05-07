import { useEffect, useState } from "react"
import { db } from "../../firebase"
import { collection, query, onSnapshot, orderBy } from "firebase/firestore"
import { useSelector } from "react-redux"
import type { RootState } from "../../store"
import type Post from "./types/Post"
import { Link } from "react-router-dom"
import { setError } from "../../features/auth/authSlice"

function BoardPage() {
  const [posts, setPosts] = useState<Post[]>([])
  const { user } = useSelector((state: RootState) => state.auth)

  useEffect(() => {
    const fetchPosts = async () => {
      try {
        const q = query(collection(db, "posts"), orderBy("createdAt", "desc"))
        const unsubscribe = onSnapshot(
          q,
          (snapshot) => {
            const postList = snapshot.docs.map((doc) => ({
              id: doc.id,
              ...doc.data(),
            })) as Post[]
            setPosts(postList)
          },
          (error) => {
            console.error("Error fetching posts:", error)
            setError("게시글을 불러오는 중 문제가 발생했습니다.")
          }
        )

        return () => unsubscribe()
      } catch (err) {
        console.error("Unexpected Error:", err)
        setError("게시글을 불러오는 중 문제가 발생했습니다.")
      }
    }

    fetchPosts()
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
        {user ? (
          posts.map((post) => (
            <div key={post.id} className="p-4 border rounded">
              <Link
                to={`/board/${post.id}`}
                className="font-bold text-blue-600 hover:underline"
              >
                {post.title}
              </Link>
              <p>{post.content.slice(0, 100)}...</p>
              <p className="text-sm text-gray-500">
                작성자: {post.authorEmail ?? "익명"}
              </p>
            </div>
          ))
        ) : (
          <p className="text-gray-500">
            로그인 후 게시글을 확인할 수 있습니다.
          </p>
        )}
      </div>
    </div>
  )
}

export default BoardPage
