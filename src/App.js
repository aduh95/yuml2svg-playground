import React, { Component } from 'react';
import './App.css';
import Graph from './Graph.js';
import AceEditor from './AceEditor.js';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = { input: 'digraph { a -> b; }', format: 'svg', engine: 'dot', showRawOutput: false };
    
    this.handleChange = this.handleChange.bind(this);
    this.handleAceEditorChange = this.handleAceEditorChange.bind(this);
  }
  
  handleChange(event) {
    let target = event.target;
    let value = target.type === 'checkbox' ? target.checked : target.value;
    let name = target.name;
    
    this.setState({ [name]: value });
  }
  
  handleAceEditorChange(input) {
    this.setState({ input });
  }
  
  render() {
    const showRawOutputDisabled = this.state.format !== 'svg';
    
    return (
      <div className="App">
        <AceEditor value={this.state.input} onChange={this.handleAceEditorChange} />
      
        <p>
          <label>
            Format:
            <select name="format" value={this.state.format} onChange={this.handleChange}>
              <optgroup label="Graphviz">
                <option value="json0">JSON (json0)</option>
                <option value="json">JSON (json)</option>
                <option value="svg">SVG (svg)</option>
                <option value="plain">Simple text format (plain)</option>
                <option value="plain-ext">Simple text format (plain-ext)</option>
                <option value="ps">PostScript (ps)</option>
                <option value="ps2">PostScript for PDF (ps2)</option>
                <option value="dot">DOT (dot)</option>
                <option value="xdot">DOT (xdot)</option>
              </optgroup>
              <optgroup label="Viz.js">
                <option value="png">PNG Image Element</option>
              </optgroup>
            </select>
          </label>
        </p>
      
        <p>
          <label>
            Engine:
            <select name="engine" value={this.state.engine} onChange={this.handleChange}>
              <option value="circo">circo</option>
              <option value="dot">dot</option>
              <option value="fdp">fdp</option>
              <option value="neato">neato</option>
              <option value="osage">osage</option>
              <option value="twopi">twopi</option>
            </select>
          </label>
        </p>
          
        <p>
          <label>
            <input name="showRawOutput" type="checkbox" value={this.state.showRawOutput} onChange={this.handleChange} disabled={showRawOutputDisabled} /> Show raw output
          </label>
        </p>
          
        <Graph input={this.state.input} format={this.state.format} engine={this.state.engine} showRawOutput={this.state.showRawOutput} />
      </div>
    );
  }
}

export default App;
