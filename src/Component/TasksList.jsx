import React, { Component } from 'react'
import AddTask from './AddTask';
import AllTasks from './AllTasks';
import Clock from './Clock';
import CompleteTask from './CompleteTask';
export default class TasksList extends Component {
    constructor(props){
        super(props);

        this.state = {
            tasks: [],
            completeTasks: [],

        }
        this.handelAdd = this.handelAdd.bind(this);
        this.handleDelete=this.handleDelete.bind(this);
        this.handleUpdate=this.handleUpdate.bind(this);
        this.handleComplete=this.handleComplete.bind(this);
        this.completedDelete = this.completedDelete.bind(this);
        this.unCompleted=this.unCompleted.bind(this);
    }

    componentDidUpdate(){
        localStorage.setItem('dataStore', JSON.stringify(this.state.tasks))
    }
    componentDidMount() {
        const dataStore = JSON.parse(localStorage.getItem('dataStore'));
        if(dataStore !== null){
            this.setState({tasks : dataStore})
        }
    }

    handelAdd(task) {
        this.setState(state =>{
            return {
                tasks: [...state.tasks, task]
            }
        })
    }

    handleDelete(index) {
        const tasks = [...this.state.tasks]
        tasks.splice(index, 1);
        this.setState({
            tasks
        })
    }

    handleUpdate(index, task) {
        const tasks = [...this.state.tasks];
        tasks[index] = task;
        this.setState({
            tasks
        })
    }

    handleComplete(task) {
        const tasks = [...this.state.tasks]
        const newTask =tasks.splice(task, 1)
        this.state.completeTasks.push(newTask)
        console.log(task)
        this.setState({
            tasks
        })
    }

    completedDelete(index){
        const completeTasks = [...this.state.completeTasks]
        completeTasks.splice(index, 1);
        this.setState({
            completeTasks
        })
    }

    unCompleted(index) {
        const completeTasks = [...this.state.completeTasks];
        const newUndoComplete = completeTasks.splice(index, 1)
        this.state.tasks.push(newUndoComplete);
        this.setState({
            completeTasks
        })
    }

    render() {
        const d = new Date()
        const weekDay = ['Sun', 'Mon', 'Tues', 'Wed', 'Thurs', 'Fri', 'Sat'];
        const months = ['Jan', 'Feb', 'Mar', 'Apr', 'Jun', 'Jul', 'Aug', 'Sept', 'Oct', 'Nov', 'Dec']
        const day = weekDay[d.getDay()]
        const month = months[d.getMonth()]
        const date = d.getDate()
        const year = d.getFullYear()

        const TodaysDate = ({day, month, date, year}) => <p>{day} <span>{month} {date}, {year}</span></p>

        return (
            <div className="container">
                <div className="date">
                <TodaysDate day={day} month={month} date={date} year={year} />
                <Clock />
                </div>

                <AddTask handelAdd={this.handelAdd}/>

                {this.state.tasks.length === 0 ? (
                    <h2 className='todo'>Nothing To Do</h2>
                ) : 
                <AllTasks 
                handleUpdate={this.handleUpdate}
                handleDelete={this.handleDelete}
                handleComplete={this.handleComplete}
                data={this.state.tasks}
                />}
                

                <CompleteTask 
                completedDelete={this.completedDelete}
                unCompleted={this.unCompleted}
                completeTasks={this.state.completeTasks}/>
            </div>
        )
    }
}
