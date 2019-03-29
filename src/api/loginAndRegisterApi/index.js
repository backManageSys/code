
import request from '@/api/request'
// 登陆请求
export function LoginRequest(username, password) {
    return request({
        url:'/account/login',
        method :'post',
        data:{
            username,
            password
        }
    })
}
// 注册请求
export function RegisterRequest() {
    return request({
        url:'',
    })
}
