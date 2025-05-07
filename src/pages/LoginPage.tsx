import { useState } from "react"
import { useDispatch, useSelector } from "react-redux"
import type { RootState, AppDispatch } from "../store"
import { auth } from "../firebase"
import {
  signInWithEmailAndPassword,
  createUserWithEmailAndPassword,
} from "firebase/auth"
import { setLoading, setError } from "../features/auth/authSlice"
import { useNavigate } from "react-router-dom"

function LoginPage() {
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const dispatch = useDispatch<AppDispatch>()
  const { loading, error } = useSelector((state: RootState) => state.auth)

  const navigate = useNavigate()

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    dispatch(setLoading(true))
    navigate(-1)
    try {
      await signInWithEmailAndPassword(auth, email, password)
    } catch (err: unknown) {
      if (err instanceof Error) {
        dispatch(setError(err.message))
      } else {
        alert("알 수 없는 오류가 발생했습니다.")
      }
    }
  }

  const handleRegister = async () => {
    dispatch(setLoading(true))
    try {
      await createUserWithEmailAndPassword(auth, email, password)
      navigate(-1)
    } catch (err: unknown) {
      if (err instanceof Error) {
        dispatch(setError(err.message))
      } else {
        alert("알 수 없는 오류가 발생했습니다.")
      }
    }
  }

  return (
    <div className="max-w-md mx-auto mt-20 p-6 border rounded shadow">
      <form onSubmit={handleSubmit} className="space-y-4">
        <input
          type="email"
          placeholder="이메일"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
          className="w-full px-3 py-2 border rounded"
        />
        <input
          type="password"
          placeholder="비밀번호"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
          className="w-full px-3 py-2 border rounded"
        />
        <button
          type="submit"
          className="w-full bg-blue-600 text-white py-2 rounded"
        >
          로그인
        </button>
        <button
          type="button"
          onClick={handleRegister}
          className="w-full bg-green-600 text-white py-2 rounded"
        >
          회원가입
        </button>
      </form>
      {loading && <p className="text-center">로딩 중...</p>}
      {error && <p className="text-red-600 text-center">{error}</p>}
    </div>
  )
}

export default LoginPage
