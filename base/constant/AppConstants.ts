const DEBUG = __DEV__;


export function getBaseUrl() {
    if (DEBUG) {
        return "https://my.base.ur/"
    } else {
        return "https://my.base.ur/"
    }
}


export function getEnvironmentVariable() {
    return DEBUG
}
