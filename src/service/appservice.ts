import { Component } from "react";
import { AxiosClient } from "./axiosClient";
import { ICompany } from "../models/company/ICompany";
import { Observable, catchError, map } from "rxjs";

export class AppService {
    
  public GetCompany():Observable<ICompany[]>{
    const http = new AxiosClient({"content-type":"application/json"});
    
    return http.get<ICompany[]>("/api/company/company")
      .pipe(
        map((res: any) => {
          return res ;
        })      
      )        
  }

}