import * as React from "react";
import { Admin, Resource } from 'react-admin';
 import simpleRestClient from 'ra-data-simple-rest';
import {EmployeeList} from "./EmployeeList";
import Dashboard from "./Dashboard";

const dataProvider = simpleRestClient('http://localhost:3000/employee');
const AdminList = () => (

       <Admin dataProvider={dataProvider} dashboard={Dashboard}>
        <Resource name="admin" list={EmployeeList} />
           </Admin>
    );
export default AdminList;
