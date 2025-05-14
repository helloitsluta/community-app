// src/routes.tsx
import { lazy } from "react"

const pages = [
  {
    path: "/",
    title: "Home",
    component: lazy(() => import("./pages/HomePage")),
    showOnNav: true,
  },
  {
    path: "/board",
    title: "Board",
    component: lazy(() => import("./pages/board/BoardPage")),
    showOnNav: true,
    children: [
      {
        path: "",
        title: "Board Main",
        component: lazy(() => import("./pages/board/BoardPage")),
        showOnNav: false,
      },
      {
        path: "create",
        title: "Create Post",
        component: lazy(() => import("./pages/board/CreatePostPage")),
        showOnNav: false,
      },
      {
        path: ":postId",
        title: "Post Detail",
        component: lazy(() => import("./pages/board/PostDetailPage")),
        showOnNav: false,
      },
      {
        path: ":postId/edit",
        title: "Edit Post",
        component: lazy(() => import("./pages/board/EditPostPage")),
        showOnNav: false,
      },
    ],
  },

  {
    path: "/counter",
    title: "Counter",
    component: lazy(() => import("./pages/CounterPage")),
    showOnNav: true,
  },
  {
    path: "/login",
    title: "Login",
    component: lazy(() => import("./pages/LoginPage")),
    showOnNav: false,
  },
]

export default pages
