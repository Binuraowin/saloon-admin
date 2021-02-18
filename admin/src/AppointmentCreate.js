import React from 'react'
import {Create, SimpleForm, TextInput,DateInput,NumberInput} from 'react-admin'

const AppointmentCreate = (props) => {
    return (
        <Create title='Create a Post'{...props}>
            <SimpleForm>
                <TextInput source='userName' />
                <DateInput source='date' />
                <TextInput source='time' />
                <TextInput source='service' />
                <NumberInput source='id' />
                <TextInput source='consumer' />
                <TextInput source='email' />
                <TextInput source='phone' />
            </SimpleForm>
        </Create>

    )
}

export default AppointmentCreate
