import React, { Component } from "react";
import ace from "ace-builds";
import "ace-builds/src-noconflict/mode-dot";
import "ace-builds/src-noconflict/ext-searchbox";
import "ace-builds/src-noconflict/theme-dracula";
import "ace-builds/src-noconflict/theme-github";

class Editor extends Component {
  constructor(props) {
    super(props);
    this.elementRef = React.createRef();
  }

  componentDidMount() {
    this.editor = ace.edit(this.elementRef.current);
    this.editor.on("change", this.aceChanged.bind(this));
    this.editor.getSession().setMode("ace/mode/dot");
    this.editor
      .getSession()
      .getDocument()
      .setValue(this.props.value || "");
  }

  componentWillUnmount() {}

  componentDidUpdate(prevProps, prevState) {
    const editorDocument = this.editor.getSession().getDocument();

    if (this.props.value !== editorDocument.getValue()) {
      editorDocument.setValue(this.props.value);
    }
  }

  aceChanged(data) {
    const editorDocument = this.editor.getSession().getDocument();

    if (this.props.onChange) {
      this.props.onChange(editorDocument.getValue(), data);
    }
  }

  render() {
    if (this.editor) {
      this.editor.setTheme(
        `ace/theme/${this.props.isDark ? "dracula" : "github"}`
      );
    }
    return <div className="editor" ref={this.elementRef} />;
  }
}

export default Editor;
