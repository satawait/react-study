import { useSearchParams, useParams } from "react-router-dom"
function About () {
  const [queryParams] = useSearchParams()
  const params = useParams()
  return (
    <div>about{queryParams.get('id')}{params.id}</div>
  )
}
export default About