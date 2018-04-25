import React, { Component } from 'react';
import Viz from 'viz.js';
import worker from 'viz.js/full.js.opaque';

class Graph extends Component {
  constructor(props) {
    super(props);
    this.viz = new Viz({ worker });
    this.state = {};
    this.containerRef = React.createRef();
  }
  
  updateOutput() {
    const { src, format, engine, showRawOutput } = this.props;
    
    // If the input is empty (or only whitespace), render nothing.

    if (!src.match(/\S+/)) {
      this.setState({ text: null, element: null, error: null });
      return;
    }
    
    // If we are showing raw output, render to a string.
    
    if (format !== 'png' && (showRawOutput || format !== 'svg')) {
      this.viz.renderString(src, { format, engine })
      .then(text => {
        this.setState({ text, element: null, error: null });
      })
      .catch(error => {
        this.setState({ error });
        this.viz = new Viz({ worker });
      });
      
      return;
    }
    
    // If we are showing an image or SVG, render a DOM element.
    
    let render;
    
    if (format === 'svg') {
      render = this.viz.renderSVGElement(src, { engine });
    } else {
      render = this.viz.renderImageElement(src, { engine });
    }
    
    render
    .then(element => {
      this.setState({ text: null, element, error: null });
    })
    .catch(error => {
      this.setState({ error });
      this.viz = new Viz({ worker });
    });
  }
  
  componentDidMount() {
    this.updateOutput();
  }
  
  componentWillUnmount() {
  }
  
  componentDidUpdate(prevProps, prevState) {
    const { src, format, engine, showRawOutput } = this.props;
    
    // Only update output if input the relevant props changed.
    
    if (src !== prevProps.src || format !== prevProps.format || engine !== prevProps.engine || showRawOutput !== prevProps.showRawOutput) {
      this.updateOutput();
    }
    
    // Only change the container if the element changed and we have a reference to the container's element.
    
    if (this.state.element !== prevState.element && this.containerRef.current) {
      let container = this.containerRef.current;
      while (container.firstChild) {
        container.removeChild(container.firstChild);
      }
      
      if (this.state.element) {
        this.containerRef.current.appendChild(this.state.element);
      }
    }
  }
  
  render() {
    const displayMode = this.state.text ? 'graph-text' : 'graph-element';
    
    return (
      <div className={"graph " + displayMode}>
        <div className="error">{this.state.error ? this.state.error.message : []}</div>
        <div className="text"><textarea value={this.state.text ? this.state.text : ""} /></div>
        <div className="element" ref={this.containerRef}></div>
      </div>
    );
  }
}

export default Graph;
