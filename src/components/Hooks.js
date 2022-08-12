import React, { useReducer, useState, useEffect, useRef, useContext, useCallback, useMemo } from "react"
import context from '../context/context'

class Test extends React.Component {
  state = {}
  render () {
    return (
      <div>this is test</div>
    )
  }
}
function reducer (state, action) {
  switch (action.type) {
    case 'increment':
      return { count: state.count + 1 }
    case 'decrement':
      return { count: state.count - 1 }
    default:
      throw new Error()
  }
}
const initialState = { count: 0 }

function Hooks (props) {
  const message = useContext(context)
  console.log(message)
  const [count, setCount] = useState(() => props.count + 20)
  const [y, setY] = useState(0)
  /**
   * 不加依赖项 - 初始化 + 重新渲染
   * 加[] - 初始化执行一次
   * 加特定依赖项[count] - 首次执行 + 任意一个变化执行
   */
  useEffect(() => {
    console.log('y')
    document.title = y
    return () => {
      console.log('组件销毁时会调用')
    }
  }, [y])
  useEffect(() => {
    const loadData = async () => {
      const res = await fetch('http://www.baidu.com')
      console.log(res)
    }
    loadData()
  }, [])
  document.addEventListener('scroll', () => {
    setY(document.documentElement.scrollTop)
  }, [y])
  const testRef = useRef(null)
  useEffect(() => {
    console.log(testRef.current)
  }, [testRef])
  // 记忆变量
  let testCount = 0
  let testCallBack = useCallback(() => {
    // console.log(testCount)
    testCount++
    setCount(testCount)
  }, [testCount])
  const testMemo = useMemo(() => {
    return count + 1
  }, [count])
  console.log(testMemo)
  const [state, dispatch] = useReducer(reducer, initialState)
  return (
    <div style={{ height: '1080px' }}>
      <h1 onClick={() => dispatch({ type: 'increment' })}>{state.count}</h1>
      <Test ref={testRef} />
      <button onClick={() => { testCallBack() }}>{count}-{testMemo}</button>
    </div>
  )
}
export default Hooks