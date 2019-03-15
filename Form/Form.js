import React, { Component } from 'react';
import Features from '../Features/Features';

class Form extends Component{
    
    render(){
        const {feature} = this.props;
        return(
            <section className="main__form">
                <h3>TECH SPECS AND CUSTOMIZATIONS</h3>
                <Features feature={feature}/>
            </section>
        );
    }
}

export default Form;