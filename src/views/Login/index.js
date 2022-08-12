import { useNavigate } from "react-router-dom"
function Login () {
  const navigate = useNavigate()
  const goAbout = () => {
    navigate('/about/1001', { replace: true })
  }
  return (
    <div>
      Login
      <button onClick={goAbout}>跳到关于</button>
    </div>
  )
}

export default Login