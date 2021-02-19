import React from 'react'
import {Edit, SimpleForm, TextInput, DateInput,NumberInput} from 'react-admin'

const AppointmentEdit = (props) => {
    return (
        <Edit title='Edit Post'{...props}>
            <SimpleForm>
                <TextInput source='userName'/>
                <DateInput source='date'/>
                <TextInput source='time'/>
                <TextInput source='service'/>
                <TextInput source='consumer'/>
                <TextInput source='email'/>
                <TextInput source='phone'/>
            </SimpleForm>

        </Edit>

    )
}

export default AppointmentEdit
