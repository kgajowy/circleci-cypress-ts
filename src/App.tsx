import * as React from 'react'
import { BrowserRouter as Router, Route } from 'react-router-dom'
import { About } from './about/About'
import './App.css'
import { Blog } from './blog/Blog'
import { Contact } from './contact/Contact'
import TopBar from './skeleton/TopBar'


class App extends React.Component {
    public render() {
        return (
            <div className="App">
                <Router>
                    <div>
                        <TopBar/>

                        <Route exact={true} path="/about" component={About}/>
                        <Route path="/blog" component={Blog}/>
                        <Route path="/contact" component={Contact}/>
                    </div>
                </Router>
            </div>
        )
    }
}

export default App
