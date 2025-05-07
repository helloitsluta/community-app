import { useSelector, useDispatch } from "react-redux"
import type { RootState, AppDispatch } from "../store"
import { increment, decrement, reset } from "../features/counter/counterSlice"

function CounterPage() {
  const count = useSelector((state: RootState) => state.counter.value)
  const dispatch = useDispatch<AppDispatch>()

  return (
    <div className="text-center mt-10">
      <h1 className="text-2xl font-bold mb-4">Redux Counter</h1>
      <p className="text-xl mb-4">{count}</p>
      <div className="space-x-4">
        <button
          onClick={() => dispatch(increment())}
          className="bg-blue-500 text-white px-4 py-2 rounded"
        >
          +
        </button>
        <button
          onClick={() => dispatch(decrement())}
          className="bg-red-500 text-white px-4 py-2 rounded"
        >
          -
        </button>
        <button
          onClick={() => dispatch(reset())}
          className="bg-gray-500 text-white px-4 py-2 rounded"
        >
          Reset
        </button>
      </div>
    </div>
  )
}

export default CounterPage
