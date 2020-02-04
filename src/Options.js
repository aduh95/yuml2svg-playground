import { h, Component } from "preact";
import samples from "./samples.json";

class Options extends Component {
  handleChange = this.handleChange.bind(this);
  loadSample = this.loadSample.bind(this);

  tooglePreviewOnMobile(e) {
    document.documentElement.style.setProperty(
      "--preview",
      e.target.checked ? '"graph"' : ""
    );
    document.documentElement.style.setProperty(
      "--graph-preview",
      e.target.checked ? "block" : "none"
    );
    document.documentElement.style.setProperty(
      "--editor-preview",
      e.target.checked ? "none" : "block"
    );
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
            checked={this.props.isDark}
            onChange={this.handleChange}
          />{" "}
          Dark mode
        </label>
        <label className="mobile-only">
          <input
            name="isPreview"
            type="checkbox"
            value={this.props.isPreview}
            onChange={this.tooglePreviewOnMobile}
          />{" "}
          Preview
        </label>
      </div>
    );
  }
}

export default Options;
