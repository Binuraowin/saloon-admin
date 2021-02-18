import * as React from "react";
import { Admin, Resource } from 'react-admin';
import jsonServerProvider from 'ra-data-json-server';
import {EmployeeList} from "./EmployeeList";

const dataProvider = jsonServerProvider('https://jsonplaceholder.typicode.com');
const AdminList = () => (

       <Admin dataProvider={dataProvider}>
        <Resource name="users" list={EmployeeList} />
           </Admin>
    );
export default AdminList;
