import React, { Component } from 'react'


class Timer extends Component {
    constructor(props) {
        super(props)

        this.state = {
            days: 0,
            hours: 0,
            mins: 0,
            secs: 0,
            userInput: '',
            userEvent:''

        }

      
    }
    componentDidMount() {
        let intervalId = setInterval(() => {
            this.setState({
                days: (Math.floor((Date.parse(this.state.userInput) - Date.now()) / (1000 * 60 * 60 * 24))),

                hours: (Math.floor(((Date.parse(this.state.userInput) - Date.now()) % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60))),

                mins: (Math.floor(((Date.parse(this.state.userInput) - Date.now()) % (1000 * 60 * 60)) / (1000 * 60))),

                secs: (Math.floor(((Date.parse(this.state.userInput) - Date.now()) % (1000 * 60)) / 1000)),
            })
            
            if (Date.now() >= Date.parse(this.state.userInput)) {
                clearInterval(intervalId)
                this.setState({
                    days: 'D',
                    hours: 'O',
                    mins: 'N',
                    secs: 'E'
                })
                alert('Date is Past Due, Enter A Valid Date')

            }
        }, 1000)

    }

    componentWillUnmount() {
        clearInterval(this.intervalId)
    }


    handleChange = e => {
        this.setState({
            userInput: e.target.value

        })
    }
    handleUserEvent = e => {
        this.setState({
            userEvent:e.target.value
        })
    }



    handleSubmit =e=>{
    //     alert('it works')
        // e.preventDefault()
    }

    leadingZero(num) {
        if (num < 10) {
            return '0' + num;
        }
        else {
            return num
        }
    }

    render() {
        return (
            <div >
                <center className='row ' >
                    <form onSubmit={this.handleSubmit}>
                    <input type='date' className='date-fm text-center' value={this.state.userInput} name='userInput' onChange={this.handleChange}></input>
                    {/* <input type='text' className='date-fm text-center' value={this.state.userEvent} name='userEvent' onChange={this.handleUserEvent}></input>
                    <button type ='submit'>Start</button> */}

                    </form>
                </center>
                <div className='row'>
                    <div className="col-md-2 "></div>
                    <div className='col-md-2 text-center box-cs' style={this.divStyle}>
                        <h3 >{isNaN(this.state.days)? 0: (this.state.days)}</h3>
                        <center><div className='dash'></div></center>
                        <h4>DAYS</h4>
                    </div>
                    <div className='col-md-2 text-center box-cs'style={this.divStyle}>
                        <h3>{isNaN(this.leadingZero(this.state.hours))? 0: (this.leadingZero(this.state.hours))}</h3>
                        <center><div className='dash'></div></center>
                        <h4>HOURS</h4>
                    </div>
                    <div className='col-md-2 text-center box-cs'style={this.divStyle}>
                        <h3>{isNaN(this.leadingZero(this.state.mins))? 0: (this.leadingZero(this.state.mins))}</h3>
                        <center><div className='dash'></div></center>
                        <h4>MINS</h4>
                    </div>
                    <div className='col-md-2 text-center box-cs ' style={this.divStyle}>
                        <h3>{isNaN(this.leadingZero(this.state.secs))? 0: (this.leadingZero(this.state.secs))}</h3>
                        <center><div className='dash'></div></center>
                        <h4>SECONDS</h4>
                    </div>
                </div>
            </div>
        )
    }
}




export default Timer
