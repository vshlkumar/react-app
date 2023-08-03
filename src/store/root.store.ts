import AppStore from "./app.store";
import FileStore from "./file.store";

export class RootStore {
    appStore:AppStore;
    fileStore:FileStore;
    
    constructor() {        
        this.appStore = new AppStore();
        this.fileStore = new FileStore();
    }
}

const rootStore = new RootStore();

export default rootStore;