import React from 'react';

class Parageraph extends React.Component {
    constructor(props) {
        super(props);
        this.domElement = React.createRef()
        this.handelClick = this.handelClick.bind(this)
    }

    
    handelClick(){
        console.log(this.domElement.current)
    }

    render() {
        return <div ref={this.domElement} id='element' onClick={this.handelClick}>hello</div>;
    }
}


export default Parageraph;
