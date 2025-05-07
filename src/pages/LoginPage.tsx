import { useState } from "react"
import {
  signInWithEmailAndPassword,
  createUserWithEmailAndPassword,
} from "firebase/auth"
import { auth } from "../firebase"

function LoginPage() {
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const [isRegister, setIsRegister] = useState(false)

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    try {
      if (isRegister) {
        await createUserWithEmailAndPassword(auth, email, password)
        alert("회원가입 성공!")
      } else {
        await signInWithEmailAndPassword(auth, email, password)
        alert("로그인 성공!")
      }
    } catch (err: unknown) {
      if (err instanceof Error) {
        alert(err.message)
      } else {
        alert("알 수 없는 오류가 발생했습니다.")
      }
    }
  }

  return (
    <div className="max-w-md mx-auto mt-20 p-6 border rounded shadow">
      <h2 className="text-2xl font-bold mb-4 text-center">
        {isRegister ? "회원가입" : "로그인"}
      </h2>
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
          className="w-full bg-blue-600 text-white py-2 rounded hover:bg-blue-700"
        >
          {isRegister ? "회원가입" : "로그인"}
        </button>
      </form>
      <p className="text-sm text-center mt-4">
        {isRegister ? "이미 계정이 있으신가요?" : "계정이 없으신가요?"}{" "}
        <button
          onClick={() => setIsRegister(!isRegister)}
          className="text-blue-600 underline"
        >
          {isRegister ? "로그인" : "회원가입"}
        </button>
      </p>
    </div>
  )
}

export default LoginPage
