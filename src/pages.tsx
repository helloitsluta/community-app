// src/routes.tsx
import { lazy } from "react"

const pages = [
  {
    path: "/",
    title: "Home",
    component: lazy(() => import("./pages/HomePage")),
    showOnNavBar: true,
  },
  {
    path: "/board",
    title: "Board",
    component: lazy(() => import("./pages/board/BoardPage")),
    showOnNavBar: true,
    children: [
      {
        path: "",
        title: "Board Main",
        component: lazy(() => import("./pages/board/BoardPage")),
        showOnNavBar: false,
      },
      {
        path: "create",
        title: "Create Post",
        component: lazy(() => import("./pages/board/CreatePostPage")),
        showOnNavBar: false,
      },
      {
        path: ":postId",
        title: "Post Detail",
        component: lazy(() => import("./pages/board/PostDetailPage")),
        showOnNavBar: false,
      },
      {
        path: ":postId/edit",
        title: "Edit Post",
        component: lazy(() => import("./pages/board/EditPostPage")),
        showOnNavBar: false,
      },
    ],
  },

  {
    path: "/counter",
    title: "Counter",
    component: lazy(() => import("./pages/CounterPage")),
    showOnNavBar: true,
  },
  {
    path: "/login",
    title: "Login",
    component: lazy(() => import("./pages/LoginPage")),
    showOnNavBar: false,
  },
]

export default pages
