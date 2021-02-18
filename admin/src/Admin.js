import * as React from "react";
import { Admin, Resource } from 'react-admin';
 import simpleRestClient from 'ra-data-simple-rest';
import {EmployeeList} from "./EmployeeList";
import Dashboard from "./Dashboard";
import EmployeeCreate from "./EmployeeCreate";

const dataProvider = simpleRestClient('http://localhost:3000');
const AdminList = () => (

       <Admin dataProvider={dataProvider} dashboard={Dashboard}>
        <Resource name="employee" list={EmployeeList} create={EmployeeCreate}/>
           </Admin>
    );
export default AdminList;
