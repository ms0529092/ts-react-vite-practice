import axios, {
    AxiosError,
    AxiosInstance, 
    InternalAxiosRequestConfig,
    AxiosResponse,
} from 'axios';

const service:AxiosInstance = axios.create({
    baseURL:'/apiNinja',
    headers:{
        'Content-Type': 'application/json; charset=UTF-8',
        Accept: 'application/json;',
        'X-Api-Key':'IiJO7xA1E56B/MQmJNM36g==ze8IYHkQTRmRpki3'
    },
    timeout: 30000
})

const onRequest = (config:InternalAxiosRequestConfig):InternalAxiosRequestConfig => {
    return config;
}

const onResponse = (response:AxiosResponse):AxiosResponse => {
    return response;
}

const onError = (error:AxiosError | Error):Promise<AxiosError> => {
    return Promise.reject(error)
}

const setInstance = (instance:AxiosInstance) => {
    instance.interceptors.request.use(onRequest, onError);
    instance.interceptors.response.use(onResponse, onError);
}

setInstance(service)

const Axios = <T>(method:string, url:string, postData:T, config?:InternalAxiosRequestConfig):Promise<AxiosResponse> => {
    switch(method){
        case 'get':
            return service.get(url, { params:postData })
        break;
        case 'post':
            return service.post(url, postData, config)
        break;
        default:
            return Promise.reject('起笑了～起笑了～快檢查');
            
    }

}

export default Axios