import * as React from "react";
import {
    List,
    Datagrid,
    TextField,
    ReferenceField,
    EditButton,
    Edit,
    Create,
    SimpleForm,
    ReferenceInput,
    SelectInput,
    TextInput,
    Filter,
} from 'react-admin';

const PostFilter = (props) => (
    <Filter {...props}>
        <TextInput label = "Search" source = "q" alwaysOn />
        <ReferenceInput label = "User" source = "userId" reference = "users" allowEmpty>
            <SelectInput optionText = "name"/>
        </ReferenceInput>
    </Filter>
);

export const PostList = props => (
    <List filters = { < PostFilter /> } {...props}>
        <Datagrid>
            <TextField source = "id" />
            <ReferenceField source = "userId" reference = "users">
                <TextField source = "name" />
            </ReferenceField>
            <TextField source = "title" />
            <EditButton />
        </Datagrid>
    </List>
);


const PostTitle = ({ record }) => {
    return <span>Post { record ? `"${ record.title }` : '' }</span>;
};

export const PostEdit = props => (
    <Edit title = { <PostTitle /> } {...props}>
        <SimpleForm>
            <TextField disabled source = "id" />
            <ReferenceInput source = "userId" reference="users">
                <SelectInput optionText = "name" />
            </ReferenceInput>
            <TextInput source = "title" />
            <TextInput multiline source = "body" />
        </SimpleForm>
    </Edit>
);

export const PostCreate = props => (
    <Create {...props}>
        <SimpleForm>
            <ReferenceInput source = "userId" reference = "users">
                <SelectInput optionText = "name" />
            </ReferenceInput>
            <TextInput source = "title" />
            <TextInput multiline source = "body" />
        </SimpleForm>
    </Create>
);