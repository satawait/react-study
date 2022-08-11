import React from 'react'
import context from '../context/context'
import { PropTypes } from "prop-types"
const { Consumer } = context
function GrandSon ({ children, name = 'xiaoming' }) {
  return (
    <div>
      {children}
      <Consumer>
        {value => <span>{value}</span>}
      </Consumer>
      孙子组件
      {name}
    </div>
  )
}
GrandSon.defaultProps = {
  name: 'sam'
}
GrandSon.propTypes = {
  name: PropTypes.string.isRequired
}
class Test extends React.Component {
  state = { age: 100 }
  static defaultProps = {
    count: 1000
  }
  static propTypes = {
    count: PropTypes.number
  }
  render () {
    return (
      <>
        <GrandSon name={'123'}>
          children item111
        </GrandSon>
        {this.props.grandChild}
        <span onClick={this.props.addCount}>子组件{this.props.count}</span>
      </>
    )
  }
}

Test.defaultProps = {
  count: 1000
}
Test.propTypes = {
  count: PropTypes.number.isRequired
}

export default Test