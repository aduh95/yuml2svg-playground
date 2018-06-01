import React, { Component } from "react";
import Editor from "./Editor.js";
import Options from "./Options.js";
import Graph from "./Graph.js";

const STORAGE_ENTRY = "graph";
const defaultSrc = `// https://github.com/jaime-olivares/yuml-diagram/wiki

// {type:activity}
(start)-><a>[kettle empty]->(Fill Kettle)->|b|
<a>[kettle full]->|b|->(Boil Kettle)->|c|
|b|->(Add Tea Bag)->(Add Milk)->|c|->(Pour Water)
(Pour Water)->(end)
`;

let beforeUnloadMessage = null;

window.addEventListener("beforeunload", function(e) {
  return beforeUnloadMessage;
});

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      src: localStorage.getItem(STORAGE_ENTRY) || defaultSrc,
      isDark: false,
    };

    this.handleOptionChange = this.handleOptionChange.bind(this);
    this.handleAceEditorChange = this.handleAceEditorChange.bind(this);
  }

  handleOptionChange(name, value) {
    this.setState({ [name]: value });
  }

  handleAceEditorChange(src) {
    this.setState({ src });
    localStorage.setItem(STORAGE_ENTRY, src);
  }

  componentDidUpdate(prevProps, prevState) {
    const { src } = this.state;

    if (src !== prevState.src) {
      beforeUnloadMessage = `Your changes will not be saved.`;
    }
  }

  render() {
    return (
      <div className="app">
        <div className="header">
          <b>yuml2svg</b> &mdash;
          <a href="https://www.npmjs.com/package/yuml2svg">
            <img
              alt="npm package"
              src="https://img.shields.io/npm/v/yuml2svg.svg"
            />
          </a>
          <a href="https://www.yarnpkg.com/package/yuml2svg">
            <img
              alt="node version"
              src="https://img.shields.io/node/v/yuml2svg.svg"
            />
          </a>
          <a href="https://github.com/aduh95/yuml2svg/blob/master/LICENSE.md">
            <img
              alt="license"
              src="https://img.shields.io/github/license/aduh95/yuml2svg.svg"
            />
          </a>
          <a href="https://github.com/aduh95/yuml2svg">
            <img
              alt="github package"
              src="https://img.shields.io/github/stars/aduh95/yuml2svg.svg?style=social"
            />
          </a>
        </div>
        <div className="split">
          <div className="master">
            <Editor
              value={this.state.src}
              onChange={this.handleAceEditorChange}
            />
          </div>

          <div className="detail">
            <Options
              isDark={this.state.isDark}
              onOptionChange={this.handleOptionChange}
            />
            <Graph src={this.state.src} isDark={this.state.isDark} />
          </div>
        </div>
      </div>
    );
  }
}

export default App;
