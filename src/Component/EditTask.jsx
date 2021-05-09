import React, { Component } from 'react'

export default class EditTask extends Component {
    constructor(props){
        super(props);

        this.state= {
            value: props.task,
            isEditing: false
        }
        console.log(this.state.value);
        this.handleChange= this.handleChange.bind(this);
        this.handleSubmit=this.handleSubmit.bind(this);
        this.toggleEditing=this.toggleEditing.bind(this);
        
    }

    handleChange(e) {
        const value = e.target.value;
        this.setState(state => {
            return {
                ...state, value
            }
        })
    }

    toggleEditing() {
        this.setState(state => {
            return {
                ...state,
                isEditing: !this.state.isEditing
            }
        })
    }

    handleSubmit() {
        this.props.handleUpdate(this.props.index, this.state.value);
        this.toggleEditing();

    }
    
    render() {
        return (
            <>
            {this.state.isEditing ? <input className='editinput'
            onChange={this.handleChange}
            value={this.state.value}/> : this.state.value}
            {!this.state.isEditing ? <button className='editbtn' onClick={this.toggleEditing}>Edit</button> : 
            <button className='editbtn' onClick={this.handleSubmit}>Save</button>}
            </>
        )
    }
}
