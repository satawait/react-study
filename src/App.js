import React, { createRef } from 'react'
import Child from './components/Child'
import context from './context/context'
const songs = [{
  id: 1, name: 'test1'
}, {
  id: 2, name: 'test2'
}, {
  id: 3, name: 'test3'
}]

const styleFont = {
  fontSize: '30px'
}
const clickHello = (e, msg) => {
  alert(msg)
}

const { Provider } = context
function Hello () {
  return <h1 onClick={e => clickHello(e, 'hello message')}>hello</h1>
}
class HelloComponent extends React.Component {
  state = {
    count: 0,
    name: 'sam'
  }
  msgRef = createRef()
  clickHello = () => {
    console.log(this.msgRef.current.value)
    this.setState({
      count: this.state.count + 1
    })
  }
  inputChange = e => {
    this.setState({
      name: e.target.value
    })
  }
  render () {
    return (
      <>
        <input type="text" name="nickname" id="nickname" ref={this.msgRef} />
        <input type="text" name="name" id="name" value={this.state.name} onChange={this.inputChange} />
        <h1 onClick={this.clickHello}>{this.state.count}</h1>
      </>
    )
  }
}
class App extends React.Component {
  state = {
    message: '父组件信息',
    count: 0
  }
  addCount = () => {
    this.setState({
      count: this.state.count + 1
    })
  }
  render () {
    return (
      <Provider value={this.state.message}>
        <Child addCount={this.addCount} count={this.state.count} clickHello={clickHello} grandChild={<div>孙子元素</div>} />
        <Hello />
        <HelloComponent />
        <div className={true ? 'APP' : ''} onClick={this.addCount}>
          <ul style={{ color: 'red' }}>
            {songs.map(song => <li key={song.id} style={styleFont}>{song.name}</li>)}
          </ul>
        </div>
      </Provider>
    )
  }
}

export default App
