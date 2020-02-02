import { h, Component } from "preact";
import { Fragment } from "./fragment-polyfill.js";
import Editor from "./Editor.js";
import Options from "./Options.js";
import Graph from "./Graph.js";
import samples from "./samples.json";

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
  state = {
    src: localStorage.getItem(STORAGE_ENTRY) || defaultSrc,
    isDark: matchMedia("(prefers-color-scheme: dark)").matches,
  };

  handleOptionChange = this.handleOptionChange.bind(this);
  handleAceEditorChange = this.handleAceEditorChange.bind(this);

  handleOptionChange(name, value) {
    if (name === "sample") {
      name = "src";
      value = samples[value].join("\n");
    }
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
      <div id={this.props.id}>
        <header>
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
        </header>

        <Editor
          value={this.state.src}
          onChange={this.handleAceEditorChange}
          isDark={this.state.isDark}
        />

        <Options
          isDark={this.state.isDark}
          onOptionChange={this.handleOptionChange}
        />
        <Graph src={this.state.src} isDark={this.state.isDark} />
      </div>
    );
  }
}

export default App;
