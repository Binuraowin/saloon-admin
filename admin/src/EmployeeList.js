import * as React from "react";
import { List, Datagrid, TextField } from 'react-admin';

export const EmployeeList = props => (
    <List {...props}>

        <Datagrid rowClick="edit">
            <TextField source="id" />
            <TextField source="name" />
            <TextField source="service" />
            {/*<EmailField source="email" />*/}
            {/*<TextField source="address.street" />*/}
            {/*<TextField source="phone" />*/}
            {/*<TextField source="website" />*/}
            {/*<TextField source="company.name" />*/}
        </Datagrid>
    </List>
);
