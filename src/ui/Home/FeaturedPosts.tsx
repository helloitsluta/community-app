import { useDispatch, useSelector } from "react-redux"
import type { AppDispatch, RootState } from "../../store"
import { useEffect } from "react"
import { fetchPosts } from "../../features/posts/postsAction"

const FeaturedPosts: React.FC = () => {
  const dispatch = useDispatch<AppDispatch>()
  const { posts } = useSelector((state: RootState) => state.posts)

  useEffect(() => {
    dispatch(fetchPosts())
  }, [dispatch])

  const skeletonCount = Math.max(3 - posts.length, 0)

  return (
    <section className="mx-auto px-4 py-8 lg:py-12 bg-gray-100">
      <h3 className="text-2xl lg:text-4xl font-bold mb-6 text-center">
        Featured Posts
      </h3>
      <div className="space-y-4 max-w-lg mx-auto mb-4">
        {posts.slice(0, 3).map((post, i) => (
          <div className="p-4 shadow-md bg-white" key={i}>
            <h4 className="text-lg font-bold mb-2.5 line-clamp-1">
              {post.title}
            </h4>
            <p className="text-gray-600 text-sm h-20 mb-8 line-clamp-4">
              {post.excerpt}
            </p>
            <p className="text-gray-400 text-sm text-right line-clamp-1">
              By {post.authorEmail ?? "unknown"}
            </p>
          </div>
        ))}

        {Array.from({ length: skeletonCount }).map((_, i) => (
          <div className="p-4 shadow-md bg-white" key={i}>
            <h4 className="text-lg font-bold mb-2.5 line-clamp-1">
              Title {i + 1}
            </h4>
            <p className="text-gray-600 text-sm h-20 mb-8 line-clamp-4">
              Excerpt {i + 1}
            </p>
            <p className="text-gray-400 text-sm text-right line-clamp-1">
              By Author {i + 1}
            </p>
          </div>
        ))}
      </div>
    </section>
  )
}

export default FeaturedPosts
