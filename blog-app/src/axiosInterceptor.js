import axios from "axios";
const axiosInstance=axios.create({
     baseURL:'/api/'
})
axiosInstance.interceptors.request.use((config)=>{
    const accessToken=sessionStorage.getItem('Logintoken');
    if(accessToken){
        if(config){
            config.headers.token=accessToken;
        }
    }
    return config;
},(error)=>{
    return Promise.reject(error);
})

export default axiosInstance;