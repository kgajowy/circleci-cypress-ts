import * as React from 'react'
import { NavLink as Link, RouteComponentProps as RouterProps, withRouter } from 'react-router-dom'
import './TopBar.css'

type Properties = RouterProps

class TopBar extends React.Component<Properties> {
    public render() {
        return (
            <ul>
                <li>
                    <Link to="/about">About</Link>
                </li>
                <li>
                    <Link to="/blog">Blog</Link>
                </li>
                <li>
                    <Link to="/contact">Contact Me</Link>
                </li>
            </ul>
        )
    }
}

export default withRouter(props => <TopBar {...props}/>)