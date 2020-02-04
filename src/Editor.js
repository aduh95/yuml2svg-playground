import { h, Component, createRef } from "preact";
import ExportOptions from "./ExportOptions.js";

class Editor extends Component {
  elementRef = createRef();

  requestFullScreen = () => this.elementRef.current.requestFullscreen();
  getText = () => Promise.resolve(this.props.value);

  componentDidMount() {
    const loadingPreview = document.createElement("span");
    loadingPreview.textContent = "Loading…";
    this.elementRef.current.append(loadingPreview);

    if (typeof PRERENDER === "undefined") {
      import("./ace.js")
        .then(module => module.default)
        .then(ace => {
          loadingPreview.remove();

          this.editor = ace.edit(this.elementRef.current);
          this.editor.on("change", this.aceChanged.bind(this));
          
          const session = this.editor.getSession();
          session.setMode("ace/mode/dot");
          session.setUseWrapMode(true);
          session.getDocument().setValue(this.props.value || "");
        })
        .catch(console.error);
    }
  }

  componentDidUpdate() {
    if (this.editor) {
      const editorDocument = this.editor.getSession().getDocument();

      if (this.props.value !== editorDocument.getValue()) {
        editorDocument.setValue(this.props.value);
      }
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
    return (
      <main className="editor" ref={this.elementRef}>
        <ExportOptions
          fileName="diagram.yuml"
          getText={this.getText}
          href={`data:text/yuml,${encodeURIComponent(this.props.value)}`}
          requestFullscreen={this.requestFullScreen}
        />
      </main>
    );
  }
}

export default Editor;
