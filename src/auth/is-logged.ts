let loggedIn = false

export const signIn = () => {
    loggedIn = true
}

export const isSignedIn = () => {
    return Boolean(loggedIn)
}