import React, { Component } from 'react';

class Features extends Component{
    render(){
        return(
            <div className="feature">
                <div>{this.props.feature[0]}</div>
                <div>{this.props.feature[1]}</div>
                <div>{this.props.feature[2]}</div>
                <div>{this.props.feature[3]}</div>
            </div>
        );
    }
}
export default Features;