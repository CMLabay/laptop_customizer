import React, { Component } from 'react';
import Total from '../Total/Total';


class Summary extends Component{
    render(){

        return(
            <section className="main__summary">
                <h3>NEW GREENLEAF 2018</h3>
                {this.props.summary} 
                <Total total={this.props.total}/>
            </section>
        );
    }
}
export default Summary;