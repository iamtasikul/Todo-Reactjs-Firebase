import React from 'react'
import './Todo.css';
import {List,ListItem,ListItemText} from "@material-ui/core"

function Todo(props) {
    return (
        <List className="todo__list">
            <ListItem >
            <ListItemText secondary="Todo" primary={props.text}></ListItemText>
            </ListItem> 
        </List>
    )
}

export default Todo;
