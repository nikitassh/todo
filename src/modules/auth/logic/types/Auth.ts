export type User = {
    id: number
    email: string
    first_name: string,
    last_name: string
}


export type AuthResponse = {
    token: string
    user: User
    permissions: []
}
