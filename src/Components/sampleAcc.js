import React, { Component } from 'react';
import './Accordian.scss';
class SampleAcc extends Component {
    constructor(props) {
        super(props);
        this.state = {  }
    }
    render() { 
        return (
         <div className="main">
            <div className="title">{this.props.title}</div>
            <SampleAcc title="Section Title One">   Lorem ipsum dolor sit amet, consectetur adipisicing elit. Amet nemo harum voluptas aliquid rem possimus nostrum excepturi!
            </SampleAcc>
            <SampleAcc title="Section Title Two">   Lorem ipsum dolor sit amet, consectetur adipisicing elit. Amet nemo harum voluptas aliquid rem possimus nostrum excepturi!
            </SampleAcc>
            <SampleAcc title="Section Title Three">   Lorem ipsum dolor sit amet, consectetur adipisicing elit. Amet nemo harum voluptas aliquid rem possimus nostrum excepturi!
            </SampleAcc>
          </div>
          
          );
    }
}
 
export default SampleAcc;