// 用作缓存
// sessionStorage存储

export function sesSet() {
    window.sessionStorage.setItem('','')
}

export function sesGet() {
    return JSON.parse(window.sessionStorage.getItem(''))
}

export function sesRemove() {
    window.sessionStorage.removeItem('')
}

export function sesClear() {
    window.sessionStorage.clear()
}
