import { useEffect, useState } from "react"

export default function useLocalStorage (key, defaultValue) {
  const [message, setMessage] = useState(defaultValue)
  useEffect(() => {
    window.localStorage.setItem(key, message)
  }, [message, key])
  return [message, setMessage]
}