import * as React from 'react'
import { isSignedIn, signIn } from '../auth/is-logged'

interface IBlogPost {
    title: string
    id: number
}

const posts: IBlogPost[] = new Array(5).fill(0).map((_, i) => ({
    id: i,
    title: `Blog Post title ${Math.random()}`,
}))

export class Blog extends React.Component {

    public state = {
        signedIn: isSignedIn()
    }

    public logIn = () => {
        setTimeout(() => {
            signIn()
            this.setState({
                signedIn: isSignedIn()
            })
        }, 5000)
    }

    public render() {
        const { signedIn } = this.state
        return (
            <>
                {!signedIn && <button onClick={this.logIn}>Log in to see Posts</button>}
                {signedIn && posts.map((post, index) => <div key={index}>{post.id} - {post.title}</div>)}
            </>
        )
    }
}