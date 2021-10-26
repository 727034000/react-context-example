import logo from './logo.svg';
import './App.css';
import React, {Component, useState} from 'react'
import {App2, App3, App4} from './App2'

export const TestContext = React.createContext({})
export const {Provider, Consumer} = TestContext

/**
 * 函数式组件使用Provider
 */
function App01() {
    const [user, setUser] = useState('张三')
    return (
        <div className="App">
            <header className="App-header">
                <img src={logo} className="App-logo" alt="logo"/>
                首页: {user}
                <Provider value={{user, setUser}}>
                    <App2/>
                    <App3/>
                    <App4/>
                </Provider>
            </header>
        </div>
    );
}

/**
 * 类式组件使用Provider
 */
class App02 extends Component {
    constructor(props) {
        super(props);
        this.state = {
            user: '李四'
        }
    }

    render() {
        const user = this.state.user
        const setUser = (newUser) => {
            this.setState({
                user: newUser
            })
        }
        return (
            <div className="App">
                <header className="App-header">
                    <img src={logo} className="App-logo" alt="logo"/>
                    首页: {this.state.user}
                    <Provider value={{user, setUser}}>
                        <App2/>
                        <App3/>
                        <App4/>
                    </Provider>
                </header>
            </div>
        )
    }
}

export default App01;
