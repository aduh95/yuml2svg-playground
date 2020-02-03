import yuml2svg from "yuml2svg";
import workerURL from "./get-viz.js-worker.js";

const vizOptions = { workerURL };

let previousURL;

export default (yuml, options) =>
  yuml2svg(yuml, options, vizOptions).then(svg => {
    const file = new File([svg], "diagram.svg", {
      type: "image/svg+xml",
    });
    URL.revokeObjectURL(previousURL);
    previousURL = URL.createObjectURL(file);
    return previousURL;
  });
