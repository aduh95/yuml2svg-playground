import React, { Component } from 'react';
import AceEditor from './AceEditor.js';
import Options from './Options.js';
import Graph from './Graph.js';

const defaultSrc = `# http://www.graphviz.org/content/cluster

digraph G {

	subgraph cluster_0 {
		style=filled;
		color=lightgrey;
		node [style=filled,color=white];
		a0 -> a1 -> a2 -> a3;
		label = "process #1";
	}

	subgraph cluster_1 {
		node [style=filled];
		b0 -> b1 -> b2 -> b3;
		label = "process #2";
		color=blue
	}
	start -> a0;
	start -> b0;
	a1 -> b3;
	b2 -> a3;
	a3 -> a0;
	a3 -> end;
	b3 -> end;

	start [shape=Mdiamond];
	end [shape=Msquare];
}`;

class App extends Component {
  constructor(props) {
    super(props);
    this.state = { src: defaultSrc, format: 'svg', engine: 'dot', showRawOutput: false };
    
    this.handleOptionChange = this.handleOptionChange.bind(this);
    this.handleAceEditorChange = this.handleAceEditorChange.bind(this);
  }
  
  handleOptionChange(name, value) {
    this.setState({ [name]: value });
  }
  
  handleAceEditorChange(src) {
    this.setState({ src });
  }
  
  render() {
    return (
      <div className="App">
        <div className="header">
          <b>Viz.js</b> &mdash;
          <a href="http://www.graphviz.org">Graphviz</a> in your browser.
          Read more at <a href="https://github.com/mdaines/viz.js">the GitHub repository</a>.
        </div>
        <div className="panes">
          <AceEditor value={this.state.src} onChange={this.handleAceEditorChange} />

          <div className="output">
            <Options format={this.state.format} engine={this.state.engine} showRawOutput={this.state.showRawOutput} onOptionChange={this.handleOptionChange} />
            <Graph src={this.state.src} format={this.state.format} engine={this.state.engine} showRawOutput={this.state.showRawOutput} />
          </div>
        </div>
      </div>
    );
  }
}

export default App;
