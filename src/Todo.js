import React, { useState } from 'react'
import './Todo.css';
import {Button,List,ListItem,ListItemText,Modal} from "@material-ui/core"
import { makeStyles } from '@material-ui/core/styles';
import db from './firebase';

const useStyles = makeStyles((theme) => ({
    paper: {
      position: 'absolute',
      width: 400,
      backgroundColor: theme.palette.background.paper,
      border: '2px solid #000',
      boxShadow: theme.shadows[5],
      padding: theme.spacing(2, 4, 3),
    },
  }));

  

function Todo(props) {
    const classes=useStyles();
    const [open,setOpen]=useState(false);
    const [input,setInput]=useState();

    const handleOpen=()=>{
        setOpen(true);
    }

    const updateTodo=()=>{
        db.collection('todos').doc(props.todo.id).set({
            todo:input
        },{merge:true});
        setOpen(false);
    }

    return (
        <>
        <Modal
            open={open}
            onClose={e=>setOpen(false)}>
    <div className="classes.paper">
        <input placeholder={props.todo.todo} value={input} onChange={event=>setInput(event.target.value)}/>
        <Button onClick={updateTodo}>Update Todo</Button>
    </div>
    </Modal>

        <List className="todo__list">
            <ListItem >
            <ListItemText secondary="Todo" primary={props.todo.todo}></ListItemText>
            </ListItem> 
            <Button onClick={e=>setOpen(true)}>Edit</Button>
            <Button onClick={event=>db.collection('todos').doc(props.todo.id).delete()}>Delete Me</Button>
        </List>
        </>
    )
}

export default Todo;
