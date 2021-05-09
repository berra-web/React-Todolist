import React from 'react'
import Task from './Task'
import key from './generateKey'
export default function AllTasks(props) {
    const tasks = props.data.map((task, index) => {
        return <Task 
        handleDelete={props.handleDelete}
        toggleEditing={props.toggleEditing}
        handleUpdate={props.handleUpdate}
        handleComplete={props.handleComplete}
        key={key()}
        index={index}
        task={task}/>
    })
    return (
        <>
        <h3>Todo</h3>
        <ul id="myMap-Inbox">
            {tasks}
        </ul>
        </>
    )
}
