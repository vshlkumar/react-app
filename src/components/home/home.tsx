import { Component, FC, ReactNode, useCallback, useEffect, useMemo, useRef, useState } from "react";
import { inject, observer } from "mobx-react";
import { AppStore } from "@stores";
import { Button, Checkbox, TextField } from "@mui/material";
import AgGridTable from "../grid/grid";

type Props = {
    appStore?: AppStore;
}

const HomeComponent: FC<Props> = inject('appStore')(
    observer(({ appStore }) => {
        const [company, setCompany] = useState("");
        const [isActive, setChecked] = useState(true);

        useEffect(() => {
            //appStore?.getCompany(); 
        }, []);


        const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
            setChecked(event.target.checked);
        };
        const handleText = (event: React.ChangeEvent<HTMLInputElement>) => {
            setCompany(event.target.value);
        }

        const clickme = () => {
            appStore?.addCompany(company, isActive);
        };

        return (

            <div >
                <br />
                <TextField id="outlined-basic" name="company" onChange={handleText} value={company} placeholder="company" />
                <br />
                <div><Checkbox
                    checked={isActive}
                    onChange={handleChange}
                    inputProps={{ 'aria-label': 'controlled' }}
                />IsActive</div>
                <Button variant="outlined" onClick={clickme} id="newCompany" name="Company">Add Company</Button>
                <br />

                <AgGridTable data={appStore?.data} />
            </div>
        )

    })
);

export default HomeComponent;
