import { h, Component, createRef } from "preact";
import yuml2url from "./yuml2url.js";
import ExportOptions from "./ExportOptions.js";

const mime = "image/svg+xml";

class Graph extends Component {
  state = { src: null };
  diagramElement = createRef();

  requestFullScreen = () => this.diagramElement.current.requestFullscreen();
  getText = () =>
    fetch(this.state.src).then(r =>
      r.ok ? r.text() : Promise.reject(r.status)
    );

  updateOutput() {
    const { src, isDark } = this.props;

    // If the input is empty (or only whitespace) (or during prerendering), render nothing.
    if (!src.match(/\S+/) || typeof PRERENDER !== "undefined") {
      this.setState({ element: null, error: null });
      return;
    }

    yuml2url(src, { isDark })
      .then(url => {
        location.hash = src;
        this.setState({ src: url, error: null });
      })
      .catch(error => {
        console.warn(error);
        this.setState({ error });
      });
  }

  componentDidMount() {
    this.updateOutput();
  }

  componentDidUpdate(prevProps, prevState) {
    const { src, isDark } = this.props;

    // Only update output if input the relevant props changed.

    if (src !== prevProps.src || isDark !== prevProps.isDark) {
      this.updateOutput();
    }
  }

  render() {
    const displayMode = this.props.isDark ? "graph-dark" : "graph-light";

    return (
      <div className={"graph " + displayMode}>
        <div className="error">
          {this.state.error ? this.state.error.message : []}
        </div>
        <div className="element">
          {this.state.src ? (
            <img alt="diagram" src={this.state.src} ref={this.diagramElement} />
          ) : (
            []
          )}
        </div>
        <ExportOptions
          fileName="diagram.svg"
          getText={this.getText}
          href={this.state.src}
          requestFullscreen={this.requestFullScreen}
        />
      </div>
    );
  }
}

export default Graph;
