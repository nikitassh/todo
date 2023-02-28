type Keys = 'user' | 'token'

class Storage {
    get(key: Keys) {
        const data = localStorage.getItem(key)
        if (data) {
            console.log('DATA IS DEFINED', data)
            return JSON.parse(data)
        }
        return null
    }

    set(key: Keys, data: any) {
        localStorage.setItem(key, JSON.stringify(data))
    }

    clear() {
        localStorage.clear()
    }
}

export const storage = new Storage()