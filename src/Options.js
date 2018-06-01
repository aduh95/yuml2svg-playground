import React, { Component } from "react";

class Options extends Component {
  constructor(props) {
    super(props);

    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(event) {
    let target = event.target;
    let value = target.type === "checkbox" ? target.checked : target.value;
    let name = target.name;

    this.props.onOptionChange(name, value);
  }

  render() {
    return (
      <div className="options">
        <label>
          <input
            name="isDark"
            type="checkbox"
            value={this.props.isDark}
            onChange={this.handleChange}
          />{" "}
          Dark mode
        </label>
      </div>
    );
  }
}

export default Options;
