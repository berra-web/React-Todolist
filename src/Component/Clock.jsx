import React, { Component } from 'react'

export default class Clock extends Component {
    constructor(props){
        super(props);

        this.state={
            time: new Date().toLocaleTimeString()
        }
    }

    componentDidMount(){
        this.timer = setInterval(() => {
            this.setState({
                time: new Date().toLocaleTimeString()
            })
        }, 1000)
    }

    componentWillUnmount(){
        clearInterval(this.timer);
    }

    render() {
        return (
            <div>
                <p className='clock'>{this.state.time}</p>
            </div>
        )
    }
}
