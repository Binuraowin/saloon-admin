import * as React from "react";
import { List, Datagrid, TextField } from 'react-admin';

export const EmployeeList = props => (
    <List {...props}>

        <Datagrid rowClick="edit">
            <TextField source='name' />
            <TextField source='service' />
            <TextField source='id' />
            <TextField source='jobRole' />
            <TextField source='workingHours' />
            <TextField source='workedHours' />
            <TextField source='sallery' />
            {/*<TextField source='password' />*/}

        </Datagrid>
    </List>
);
