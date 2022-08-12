import React from "react"
import { Button } from "antd"
class Test extends React.Component {
    constructor(props) {
        super(props)
        console.log('constructor')
    }
    componentDidMount () {
        console.log('componentDidMount')
    }
    componentDidUpdate () {
        console.log('componentDidUpdate')
    }
    componentWillUnmount () {
        console.log('componentWillUnmount')
    }
    getSnapshotBeforeUpdate (prevProps, prevState) {
        console.log('getSnapshotBeforeUpdate', prevProps, prevState)
    }
    static getDerivedStateFromProps (props, state) {
        console.log('getDerivedStateFromProps', props, state)
        return state
    }
    shouldComponentUpdate (nextProps, nextState) {
        console.log('shouldComponentUpdate', nextProps, nextState)
        return true
    }
    state = {
        count: 0
    }
    addCount = () => {
        this.setState({
            count: this.state.count + 1
        })
    }
    render () {
        console.log('render')
        return (
            <>
                <Button type="primary" onClick={this.addCount}>click</Button>
                <div>Test lifecycle</div>
            </>)
    }
}

export default Test