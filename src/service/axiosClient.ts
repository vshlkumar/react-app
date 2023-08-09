import axios, { AxiosError, AxiosInstance, AxiosPromise, AxiosResponse } from "axios"
import { Observable } from "rxjs";
import { HttpBaseService } from "./httpBaseService";

export class AxiosClient extends HttpBaseService {
    constructor(axiosParams:any) {
        super(axiosParams);
        
        this.httpClient.interceptors.request.use((c)=>{
            c.baseURL = "https://localhost:7235";    
            c.headers.Accept = "*/*";

            return c;
        }, error =>  Promise.reject(error));

        this.httpClient.interceptors.response.use(
            this.successHandler.bind(this),
            this.errorHandler.bind(this)
        );    
    }
}
