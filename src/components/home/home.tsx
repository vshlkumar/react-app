import { Component, FC, ReactNode, useEffect, useState} from "react";
import { AppService } from "../../service/appservice";
import { ICompany } from "../../models/company/ICompany";
import { inject, observer } from "mobx-react";
import AppStore from "../../store/app.store";

type Props = {
    appStore?: AppStore;
}

const HomeComponent:FC<Props> = inject('appStore')(
    observer(({appStore}) => {    
        //const [data, SetData] = useState([{name:"",isActive:false,id:0}]);    
        
        useEffect(() => {
            appStore?.getCompany();
        }, []);

        return (
            <div>
                {
                    appStore?.data?.map((value, index) => {
                        return <div key={index}>{value.name}</div>
                    })
                }
            </div>
        )
    
    })
);

export default HomeComponent;
