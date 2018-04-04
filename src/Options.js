import React, { Component } from 'react';

class Options extends Component {
  constructor(props) {
    super(props);
    
    this.handleChange = this.handleChange.bind(this);
  }
  
  handleChange(event) {
    let target = event.target;
    let value = target.type === 'checkbox' ? target.checked : target.value;
    let name = target.name;

    this.props.onOptionChange(name, value);
  }
  
  render() {
    const showRawOutputDisabled = this.props.format !== 'svg';
    
    return (
      <div className="options">
        <label>
          Engine:
          <select name="engine" value={this.props.engine} onChange={this.handleChange}>
            <option value="circo">circo</option>
            <option value="dot">dot</option>
            <option value="fdp">fdp</option>
            <option value="neato">neato</option>
            <option value="osage">osage</option>
            <option value="twopi">twopi</option>
          </select>
        </label>
          
        <label>
          Format:
          <select name="format" value={this.props.format} onChange={this.handleChange}>
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
          
        <label className={showRawOutputDisabled ? 'disabled' : ''}>
          <input name="showRawOutput" type="checkbox" value={this.props.showRawOutput} onChange={this.handleChange} disabled={showRawOutputDisabled} /> Show raw output
        </label>
      </div>
    );
  }
}

export default Options;
