import useStore from "./store"
import { observer } from "mobx-react-lite"
function AppMobx () {
  const rootStore = useStore()
  return (
    <div>
      AppMobx{rootStore.counterStore.count}
      {rootStore.listStore.filterList.join('-')}
      <button onClick={rootStore.counterStore.addCount}>+</button>
      <button onClick={rootStore.listStore.addList}>++</button>
    </div>
  )
}

export default observer(AppMobx)