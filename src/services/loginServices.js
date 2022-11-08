export const login = (email,password)=>{
    let isLogin = false;
    if(email === "hansi@gmail.com" && password === '123456' ){
        isLogin = true;
    }
    return isLogin;
}