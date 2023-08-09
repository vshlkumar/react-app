import { action, computed, makeObservable, observable} from 'mobx';
import { AppService } from "../service/appservice";
import { ICompany } from "../models/company/ICompany";
import { IContact } from '../models/IContact';

class AppStore {
appService:AppService;

public data:ICompany[] = [];
public contacts:IContact[] = [];

constructor() {
    makeObservable(this, {
        data: observable,
        contacts: observable,
        addCompany: action,
        getCompany: action,
        addContact: action
    });

    this.appService = new AppService();    
}

public getCompany():void {
    this.appService.GetCompany().subscribe(d => {     
        this.data = d;
    });
}

public addCompany(company:string, isActive: boolean): void {    
    if(company !== "")
        this.data = [...this.data, { name: company, id: this.data.length + 1, isActive: isActive }];
    // this.data.push({ name: company, id: this.data.length + 1, isActive: isActive });
}

public addContact(first:string, last:string, email:string): void {  
    this.contacts = [...this.contacts, {firstName:first, lastName:last, email:email}];    
}

}

export default AppStore;