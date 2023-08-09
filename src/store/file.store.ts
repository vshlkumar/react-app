import { makeAutoObservable } from "mobx";
import { AppService } from "../service/appservice";

export default class FileStore {    
    appService:AppService;
    
    constructor() {
        makeAutoObservable(this);
        this.appService = new AppService();
    }


    public getAbc(){

    }
}