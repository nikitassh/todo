export type Token = string

export type User = {
    id: number
    email: string
    firstName: string,
    lastName: string
}


export type AuthResponse = {
    user: User
    token: Token
    permissions: []
}

export type AuthUser = {
    user: User | Readonly<{}>,
}

export type AuthUserActions = {
    setUser: (data: AuthResponse) => void
    resetUser: () => void
}

export type AuthToken = {
    token: Token | null
}

export type AuthTokenActions = {
    setToken: (token: Token) => void
    resetToken: () => void
}