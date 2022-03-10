import React from 'react';

class Timer extends React.Component {
constructor(props) {
    super(props);

    this.state = {
        time : new Date(),
        colors : ''
    };
}

    settime(){
        this.setState({
            time : new Date()
        })
    }

    componentDidMount(){
        this.interval = setInterval(()=>
        {
            this.settime();
            let randomColor = '#'+(0x1000000+Math.random()*0xffffff).toString(16).substr(1,6);
            this.setState({
                colors : randomColor
            })
        }
        ,1000)
    }

    componentWillUnmount(){
        clearInterval(this.interval)
    }


    render() {
        return (
            <div>
                <h1 style={{color : `${this.state.colors}`}}>{this.state.time.toLocaleTimeString()}</h1>
            </div>
        )
    }
}


export default Timer;