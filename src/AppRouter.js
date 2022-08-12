import { BrowserRouter, Link, Routes, Route, Navigate } from "react-router-dom"
// import About from "./views/About"
// import Home from "./views/Home"
import Login from "./views/Login"
import Layout from "./views/Layout"
import Board from "./views/Board"
import Article from "./views/Article"
import NotFound from "./views/NotFound"
function AppRouter () {
  return (
    <BrowserRouter>
      <Link to="/">首页</Link>
      <Link to="/login">登录</Link>
      <Link to="/article">文章</Link>
      <Link to="/board">board</Link>
      <Routes>
        <Route path='/' element={<Layout />}>
          <Route index element={<Article />}></Route>
          <Route path='board' element={<Board />}></Route>
        </Route>
        <Route path='/login' element={<Login />}></Route>
        <Route path='/404' element={<NotFound />}></Route>
        <Route
          path="*"
          element={<Navigate to="/404" replace />}
        />
      </Routes>
      {/* <Link to="/about">关于</Link>
      <Link to="/">首页</Link>
      <Link to="/login">登录</Link>
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/about/:id" element={<About />}></Route>
        <Route path="/login" element={<Login />}></Route>
      </Routes> */}
    </BrowserRouter>
  )
}
export default AppRouter