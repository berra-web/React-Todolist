import React from 'react'
import UnCompleteTask from './UnCompleteTask'
import key from './generateKey'
export default function CompleteTask(props) {
    const completed = props.completeTasks.map((task, index) =>{
        return <UnCompleteTask 
        completedDelete={props.completedDelete}
        unCompleted={props.unCompleted}
        key={key()} 
        index={index}
        task={task}/>
    })
    return (
        <>
        <h3>completed</h3>
        <ul id="myMap-Box">
            {completed}
        </ul>
        </>
    )
}
