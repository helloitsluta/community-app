import { db } from "../../firebase"
import {
  collection,
  query,
  onSnapshot,
  orderBy,
  type DocumentData,
} from "firebase/firestore"
import { setPosts, setLoading, setError, type Post } from "./postsSlice"
import type { AppDispatch } from "../../store"

export const fetchPosts = () => async (dispatch: AppDispatch) => {
  dispatch(setLoading(true))

  try {
    const q = query(collection(db, "posts"), orderBy("createdAt", "desc"))
    const unsubscribe = onSnapshot(
      q,
      (snapshot) => {
        const postList = snapshot.docs.map((doc) => {
          const data: DocumentData = doc.data()

          const post: Post = {
            id: doc.id,
            title: data.title || "Untitled", // 기본값 지정
            excerpt: data.excerpt || "No content available",
            authorEmail: data.authorEmail || "Anonymous",
            createdAt:
              data.createdAt?.toDate?.().toISOString() ??
              new Date().toISOString(), // Timestamp -> Date 변환
          }

          return post
        })

        dispatch(setPosts(postList))
        dispatch(setLoading(false))
      },
      (error) => {
        console.error("Error fetching posts:", error)
        dispatch(setError("Failed to fetch posts"))
        dispatch(setLoading(false))
      }
    )

    return () => unsubscribe()
  } catch (error) {
    console.error("Unexpected Error:", error)
    dispatch(setError("Failed to fetch posts"))
    dispatch(setLoading(false))
  }
}
