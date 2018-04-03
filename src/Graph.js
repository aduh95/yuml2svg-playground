import React, { Component } from 'react';
import './Graph.css';
import { renderString, renderSVGElement, renderImageElement } from './viz.js';

class Graph extends Component {
  constructor(props) {
    super(props);
    this.state = {};
    this.containerRef = React.createRef();
  }
  
  updateOutput() {
    const { input, format, engine, showRawOutput } = this.props;
    
    // If the input is empty (or only whitespace), render nothing.

    if (!input.match(/\S+/)) {
      this.setState({ str: null, element: null, error: null });
      return;
    }
    
    // If we are showing raw output, render to a string.
    
    if (format !== 'png' && (showRawOutput || format !== 'svg')) {
      renderString(input, { format, engine })
      .then(str => {
        this.setState({ str, element: null, error: null });
      })
      .catch(error => {
        this.setState({ error });
      });
      
      return;
    }
    
    // If we are showing an image or SVG, render a DOM element.
    
    let render;
    
    if (format === 'svg') {
      render = renderSVGElement(input, { engine });
    } else {
      render = renderImageElement(input, { engine });
    }
    
    render
    .then(element => {
      this.setState({ str: null, element, error: null });
    })
    .catch(error => {
      this.setState({ error });
    });
  }
  
  componentDidMount() {
    this.updateOutput();
  }
  
  componentWillUnmount() {
  }
  
  componentDidUpdate(prevProps, prevState) {
    const { input, format, engine, showRawOutput } = this.props;
    
    // Only update output if input the relevant props changed.
    
    if (input !== prevProps.input || format !== prevProps.format || engine !== prevProps.engine || showRawOutput !== prevProps.showRawOutput) {
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
    const error = this.state.error ? <div className="error">{this.state.error.message}</div> : [];
    
    if (this.state.str) {
      return (
        <div className="Graph">
          {error}
          <pre>{this.state.str}</pre>
        </div>
      );
    } else {
      return (
        <div className="Graph">
          {error}
          <div className="svg" ref={this.containerRef} />
        </div>
      );
    }
  }
}

export default Graph;
