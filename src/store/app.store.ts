import { Subject } from "rxjs";
import {action, makeAutoObservable, observable} from 'mobx';
import { AppService } from "../service/appservice";
import { ICompany } from "../models/company/ICompany";

class AppStore {
appService:AppService;
public data:ICompany[] = [{name:"", isActive:false,id:0}];
/**
 *
 */
constructor() {
    makeAutoObservable(this);

    this.appService = new AppService();

}

public getCompany():void {
    this.appService.GetCompany().subscribe(d => {
        this.data = d;
    });
}

}

export default AppStore;