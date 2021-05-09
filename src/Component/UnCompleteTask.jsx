import React from 'react'

export default function UnCompleteTask(props) {
    return (
        <li id='myMap-Box'>{props.task}
        <button className='deletebtn' onClick={(e) => props.completedDelete(props.index)}>Delete</button>
        <button onClick={(e) => props.unCompleted(props.index)}>UnCompleted</button>
        </li>
    )
}
