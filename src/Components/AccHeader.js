import React from 'react';
import Plus from '../close-icon.png'
// import Skycons from 'react-skycons';
import './Accheader.scss'
import {
  AccordionWithHeader,
  AccordionNode, 
  AccordionHeader,
  AccordionPanel
} from 'react-accordion-with-header';

// import './styles.css';

const DAYS = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday'];


const data = DAYS.map((day, i) => ({
  day,
  low: Math.round(Math.random() * 85),
  high: Math.round(Math.random() * 120),

}));

export default class Beautiful extends React.Component {
  state = {
    active: [-1]
  };
  render() {
    return (
      <div className="block">
        <h1>Beautiful</h1>

        <AccordionWithHeader
          actionCallback={(panels, state) => this.setState({ ...state })}
        >
          {data.map((item, i) => {
            const activeClass =
              !!this.state.active.length && this.state.active.includes(i)
                ? 'opened'
                : 'closed';
            return (
              <AccordionNode className = "accordionnode" key={i}>
                <AccordionHeader
                 
                  className="accordion"
                  
                >
                  <p> Lorem ipsum dolor sit amet, consectetur adipiscing elit</p>         
                  <div className={`item circle-plus ${activeClass}`}>
                  
                    <div className="circle">
                     
                      <img src = {Plus}/>
                  
                    </div>
                  </div>
                </AccordionHeader>
                <AccordionPanel speed={400}>
                  <div className="content">
                    <p>
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                      sed do eiusmod tempor incididunt ut labore et dolore magna
                      aliqua. Elementum sagittis vitae et leo duis ut. Ut tortor
                      pretium viverra suspendisse potenti.
                    </p>
                    <p>
                      Aliquam feugiat ex lobortis tincidunt venenatis. Mauris in
                      neque diam. Mauris sodales pulvinar leo at molestie.
                      Maecenas quis elit libero. Nulla in erat leo.
                    </p>
                    <p>
                      Aliquam feugiat ex lobortis tincidunt venenatis. Mauris in
                      neque diam. Mauris sodales pulvinar leo at molestie.
                      Maecenas quis elit libero. Nulla in erat leo.
                    </p>
                    <p>
                      Aliquam feugiat ex lobortis tincidunt venenatis. Mauris in
                      neque diam. Mauris sodales pulvinar leo at molestie.
                      Maecenas quis elit libero. Nulla in erat leo.
                    </p>
                    <p>
                      Aliquam feugiat ex lobortis tincidunt venenatis. Mauris in
                      neque diam. Mauris sodales pulvinar leo at molestie.
                      Maecenas quis elit libero. Nulla in erat leo.
                    </p>
                    <p>
                      Aliquam feugiat ex lobortis tincidunt venenatis. Mauris in
                      neque diam. Mauris sodales pulvinar leo at molestie.
                      Maecenas quis elit libero. Nulla in erat leo.
                    </p>
                    <p>
                      Aliquam feugiat ex lobortis tincidunt venenatis. Mauris in
                      neque diam. Mauris sodales pulvinar leo at molestie.
                      Maecenas quis elit libero. Nulla in erat leo.
                    </p>
                    <p>
                      Aliquam feugiat ex lobortis tincidunt venenatis. Mauris in
                      neque diam. Mauris sodales pulvinar leo at molestie.
                      Maecenas quis elit libero. Nulla in erat leo.
                    </p>
                    <p>
                      Aliquam feugiat ex lobortis tincidunt venenatis. Mauris in
                      neque diam. Mauris sodales pulvinar leo at molestie.
                      Maecenas quis elit libero. Nulla in erat leo.
                    </p>    <p>
                      Aliquam feugiat ex lobortis tincidunt venenatis. Mauris in
                      neque diam. Mauris sodales pulvinar leo at molestie.
                      Maecenas quis elit libero. Nulla in erat leo.
                    </p>
                  </div>
                </AccordionPanel>
              </AccordionNode>
            );
          })}
        </AccordionWithHeader>
        <br />
      </div>
    );
  }
}