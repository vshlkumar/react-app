import axios, { AxiosError, AxiosInstance, AxiosPromise, AxiosResponse } from "axios"
import { Observable } from "rxjs";

export type HttpObserve = 'body' | 'response';

export class HttpBaseService {
    
    protected httpClient: AxiosInstance;

    constructor(params:any) {
        
        this.httpClient = axios.create({
            ...params
        });
    }

    
    protected successHandler(data:AxiosResponse){        
        return data;
    }
    protected errorHandler(data:AxiosResponse){
        throw data;
    }

    
    public get<T>(url: string, options?:{
        observe: 'response',
        params?:any,
        responseType?: ResponseType
    }): Observable<AxiosResponse<T>>;

    public get<T>(url: string, options: {        
        params?:any,
        responseType?: ResponseType
    } = {}): Observable<any> {
        return this.makeRequest('GET', url, options as any);
    }

    public makeRequest<T>(method:string, url:string, options: any): Observable<any>{        
        let request: AxiosPromise;
        const {body, params, observe, responseType} = options;
        switch(method){
            case 'GET': 
                request = this.httpClient.get<any>(url, {params, responseType});
                break;
            case 'POST': 
                request = this.httpClient.post(url);
                break;
        }

        return new Observable<any>((subscribe => {            
            request.then((response: AxiosResponse) => {                
                const data = this.getResponse(response, observe);

                subscribe.next(data);
                subscribe.complete();
            }).catch((err:AxiosError) => {
                subscribe.error(err);
                subscribe.complete();
            });
        }));
    }

    public getResponse<T>(response:AxiosResponse, observeType:HttpObserve):any{        
        switch(observeType){
            case 'response':
                return {...response};
            default:
                return response.data;
        }
    }
}

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
