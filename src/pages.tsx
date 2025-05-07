// src/routes.tsx
import { lazy } from "react"

// ✅ 페이지 목록 배열 (동적으로 관리)
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
  },
  {
    path: "/board/create",
    title: "Create Post",
    component: lazy(() => import("./pages/board/CreatePostPage")),
    showOnNavBar: false,
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
