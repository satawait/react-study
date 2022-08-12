import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import App from './AppMobx'

const root = ReactDOM.createRoot(document.getElementById('root'))
root.render(
  // 严格模式需要去掉
  // useEffect会执行2次
  // <React.StrictMode>
  <App />
  // </React.StrictMode>
)
