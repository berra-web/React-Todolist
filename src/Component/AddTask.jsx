import React, { Component } from 'react'

export default class AddTask extends Component {
    constructor(props){
        super(props);

        this.state= {
            value: '',
            error: ''
        }
        this.handelChangeInput=this.handelChangeInput.bind(this);
        this.handelSubmit=this.handelSubmit.bind(this);
    }

    handelChangeInput(e){
        this.setState({
            value: e.target.value
        })
    }

    handelSubmit(e){
        e.preventDefault()
        if(this.state.value === ''){
           return 
        }
        this.props.handelAdd(this.state.value);
        this.setState({
            value: ''
        })
    }


    render() {
        return (
            <form onSubmit={this.handelSubmit}>
                <label>ADD ITEM</label>
                <input id="new-Map" type="text"
                value={this.state.value} 
                onChange={this.handelChangeInput}/>
                <button>ADD</button>
            </form>
        )
    }
}
