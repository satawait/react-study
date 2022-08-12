import CounterStore from "./counter"
import ListStore from "./list"
import { createContext, useContext } from "react"

class RootStore {
  constructor() {
    this.counterStore = new CounterStore()
    this.listStore = new ListStore()
  }
}

const rootStore = new RootStore()
const context = createContext(rootStore)
const useStore = () => useContext(context)
export default useStore