import { h, Component } from "preact";
import { FontAwesomeIcon as Icon } from "@aduh95/preact-fontawesome";
import {
  faCopy,
  faDownload,
  faExpand,
} from "@fortawesome/free-solid-svg-icons";

class IconButton extends Component {
  state = { error: false };
  onClick = this.props.onClick
    ? (e) => {
        e.preventDefault();

        this.props.onClick().catch((e) => {
          console.error(e);
          this.setState({ error: true });
        });
      }
    : Function.prototype;

  render() {
    return (
      <a
        title={this.props.title}
        onClick={this.onClick}
        className={this.state.error ? "failed" : ""}
        href={this.props.href || "#"}
        download={this.props.download}
      >
        <Icon icon={this.props.icon} />
      </a>
    );
  }
}

export default class ExportOptions extends Component {
  state = { downloadLink: null };

  copyToClipboard = () =>
    this.props.getText().then((data) => navigator.clipboard.writeText(data));

  render() {
    return (
      <div className="export-options">
        {document.fullscreenEnabled ? (
          <IconButton
            icon={faExpand}
            title="Toggle fullscreen"
            onClick={this.props.requestFullscreen}
          />
        ) : null}
        <IconButton
          icon={faCopy}
          title="Copy to clipboard"
          onClick={this.copyToClipboard}
        />
        <IconButton
          icon={faDownload}
          title="Save to a file"
          href={this.props.href}
          download={this.props.fileName}
        />
      </div>
    );
  }
}
