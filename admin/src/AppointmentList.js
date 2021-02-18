import * as React from "react";
import { List, Datagrid, TextField } from 'react-admin';


export const AppointmentList = props => (
    <List {...props}>

        <Datagrid rowClick="edit">
            <TextField source='userName' />
            <TextField source='date' />
            <TextField source='time' />
            <TextField source='service' />
            <TextField source='id' />
            <TextField source='consumer' />
            <TextField source='email' />
            <TextField source='phone' />
        </Datagrid>
    </List>
);
export default AppointmentList
