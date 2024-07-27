import isBrowser from '@eofol-lib/is-browser'

const registerServiceworker = (serviceworkerPath: string) => {
    if (isBrowser() && "serviceWorker" in navigator) {
        navigator.serviceWorker.register(serviceworkerPath)
    }
}

export default registerServiceworker;