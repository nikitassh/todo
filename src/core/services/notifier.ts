import { toast } from 'react-toastify'


class Notifier {
    notify(message = 'Hello world') {
        toast(message, {
            position: 'top-right',
            autoClose: 5000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            draggablePercent: 60,
            progress: undefined,
            theme: 'light',
            icon: '🚀'
        })
    }
}

export const notifier = new Notifier()