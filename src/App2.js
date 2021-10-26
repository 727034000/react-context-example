import {Component, useContext} from 'react';
import {Consumer, TestContext} from './App'

/**
 * 类式组件使用Consumer
 */
class App2 extends Component {
    render() {
        return (
            <Consumer>
                {
                    (parms) => {
                        console.log('App2', parms)
                        const {user, setUser} = parms
                        return (
                            <button onClick={() => setUser('类式组件使用Consumer')}>App2修改</button>
                        )
                    }
                }
            </Consumer>
        )
    }
}

/**
 * 函数式组件使用Provider
 */
function App3() {
    return (
        <Consumer>
            {
                (parms) => {
                    console.log('App3', parms)
                    const {user, setUser} = parms
                    return (
                        <button onClick={() => setUser('函数式组件使用Provider')}>App3修改</button>
                    )
                }
            }
        </Consumer>
    )
}

/**
 * 函数式组件使用useContext
 */
function App4() {
    console.log('App4', useContext(TestContext))
    const {user, setUser} = useContext(TestContext)
    return (
        <button onClick={() => setUser('函数式组件使用useContext')}>App4修改</button>
    )
}

export {App2, App3, App4};