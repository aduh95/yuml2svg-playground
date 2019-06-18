import { h, Component } from "preact";
import samples from "./samples.json";

class Options extends Component {
  constructor(props) {
    super(props);

    this.handleChange = this.handleChange.bind(this);
    this.loadSample = this.loadSample.bind(this);
  }

  handleChange({ target }) {
    const { name } = target;
    const value = target.type === "checkbox" ? target.checked : target.value;

    this.props.onOptionChange(name, value);
  }

  loadSample({ target: { value, options } }) {
    this.props.onOptionChange("sample", value);
    options[0].selected = true;
  }

  render() {
    return (
      <div className="options">
        <select onChange={this.loadSample}>
          <option checked value="0">
            Load Sample
          </option>
          {Object.keys(samples).map(sample => (
            <option key={sample}>{sample}</option>
          ))}
        </select>
        <label>
          <input
            name="isDark"
            type="checkbox"
            value={this.props.isDark}
            onChange={this.handleChange}
          />{" "}
          Dark mode
        </label>
        <label className="mobile-only">
          <input
            name="isPreview"
            type="checkbox"
            value={this.props.isPreview}
            onChange={e => {
              document.documentElement.style.setProperty(
                "--preview",
                e.target.checked ? '"graph"' : ""
              );
            }}
          />{" "}
          Preview
        </label>
      </div>
    );
  }
}

export default Options;
