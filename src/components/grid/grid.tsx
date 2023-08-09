import { observer } from "mobx-react";
import { FC, useMemo, useRef, useState } from "react";
import { ICompany } from "../../models/company/ICompany";
import { AgGridReact } from "ag-grid-react";
import { ColDef } from "ag-grid-community";

import 'ag-grid-community/styles/ag-grid.css';
import 'ag-grid-community/styles/ag-theme-alpine.css';

type Props = {
    data: ICompany[] | undefined
}

const AgGridTable:FC<Props> = ({data}) => {
    const gridRef = useRef<AgGridReact>(null); // Optional - for accessing Grid's API
    
    const columnDefs: ColDef<ICompany, any>[] = [
        { field: 'id', headerName: 'ID' },
        { field: 'name', headerName: 'Name' },
        { field: 'isActive', headerName: 'Active' },
        // Add other columns as needed
      ];

      const defaultColDef = useMemo(() => {
          return {
            sortable: true,
            //resizable: true,
            //width: 100,
            //enableRowGroup: true,
            //enablePivot: true,
            //enableValue: true,
          };
        }, []);

    return (
        <div className="ag-theme-alpine" style={{width: 500, height: 500}}>
            <AgGridReact
                ref={gridRef} // Ref for accessing Grid's API
                rowData={data} 
                columnDefs={columnDefs}
                defaultColDef={defaultColDef} // Default Column Properties

                animateRows={true} // Optional - set to 'true' to have rows animate when sorted
                //rowSelection='multiple' // Options - allows click selection of rows

                //onCellClicked={cellClickedListener} // Optional - registering for Grid Event
            />
        </div>
    );
};

export default observer(AgGridTable);