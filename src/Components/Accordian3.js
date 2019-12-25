import React, { Component } from 'react';
class AccSec extends Component {
   state = { 
             open: false,
            class: "section"
         }
          handleClick = () => {
        if(this.state.open) {
          this.setState({
            open: false,
            class: "section"
          });
        }else{
          this.setState({
            open: true,
            class: "section open"
          });
        }
      }
    render() { 
        return ( 
            <div className={this.state.class}>
                <button>toggle</button>
                <div className="sectionhead" onClick={this.handleClick}>{this.props.title}</div>
                <div className="articlewrap">
                    <div className="article">
                        {this.props.children}
                    </div>
                </div>
            </div>
         );
    }
}
 
export default AccSec;

  
  