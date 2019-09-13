import { h, Component, createRef } from "preact";
import yuml2svg from "yuml2svg";
import workerURL from "viz.js/full.render.js";

const vizOPtions = { workerURL };

class Graph extends Component {
  constructor(props) {
    super(props);
    this.state = {};
    this.containerRef = createRef();
  }

  updateOutput() {
    const { src, isDark } = this.props;

    // If the input is empty (or only whitespace) (or during prerendering), render nothing.
    if (!src.match(/\S+/) || typeof PRERENDER !== "undefined") {
      this.setState({ element: null, error: null });
      return;
    }

    yuml2svg(src, { isDark }, vizOPtions)
      .then(svg => {
        const element = new DOMParser().parseFromString(svg, "text/xml")
          .documentElement;
        this.setState({ element, error: null });
      })
      .catch(error => {
        console.error(error);
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

    // Only change the container if the element changed and we have a reference to the container's element.

    if (this.state.element !== prevState.element && this.containerRef.current) {
      let container = this.containerRef.current;
      while (container.firstChild) {
        container.removeChild(container.firstChild);
      }

      if (this.state.element) {
        this.containerRef.current.appendChild(this.state.element);
      }
    }
  }

  render() {
    const displayMode = this.props.isDark ? "graph-dark" : "graph-light";

    return (
      <div className={"graph " + displayMode}>
        <div className="error">
          {this.state.error ? this.state.error.message : []}
        </div>
        <div className="element" ref={this.containerRef} />
      </div>
    );
  }
}

export default Graph;
