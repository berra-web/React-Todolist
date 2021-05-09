import React from 'react'
import EditTask from './EditTask'

export default function Task(props, count) {
    return (
        <div className='completeTask'>
        <li className="edit-MyMap">
            {props.index + 1}
            <EditTask 
            handleUpdate={props.handleUpdate}
            index={props.index}
            task={props.task}/>
            <button className='deletebtn' onClick={(e) => props.handleDelete(props.index)}>Delete</button>
            <button className='completebtn' onClick={(e) => props.handleComplete(props.index)}>Complete</button>
        </li>
        </div>
    )
}
