import React from 'react'
import {Edit, SimpleForm, TextInput, DateInput,} from 'react-admin'

const AppointmentEdit = (props) => {
    return (
        <Edit title='Edit Post'{...props}>
            <SimpleForm>
                <TextInput source='userName' />
                <DateInput source='date' />
                <TextInput source='time' />
                <TextInput source='service' />
                <TextInput source='id' />
            </SimpleForm>

        </Edit>

    )
}

export default AppointmentEdit
