import { AuthToken, AuthTokenActions, AuthUser, AuthUserActions } from '@auth/logic/types/Auth'
import { isEmptyObj } from '@core/utils/isEmpty'
import { create } from 'zustand'
import { persist } from 'zustand/middleware'
import { immer } from 'zustand/middleware/immer'

const initialUserState: AuthUser = {
    user: {}
}

const initialTokenState: AuthToken = {
    token: null
}

export const useUserStore = create<AuthUser & AuthUserActions>()(persist(immer((set, get) => ({
    ...initialUserState,

    isAuthenticated: !isEmptyObj(get().user),

    setUser: (data) => set({ user: data.user }),

    resetUser: () => set(initialUserState),
})), { name: 'user', version: 1 }))


export const useTokenStore = create<AuthToken & AuthTokenActions>()(persist(immer((set, get) => ({
    ...initialTokenState,

    setToken: (token) => set({ token }),

    resetToken: () => set(initialTokenState),
})), { name: 'token', version: 1 }))

