import yuml2svg from "yuml2svg";
import Yuml2SVGWorker from "worker-loader!./get-viz.js-worker.js";

let vizOptions, previousURL;

function getVizOptions() {
  if (vizOptions === undefined) {
    vizOptions = { worker: new Yuml2SVGWorker() };
  }
  return vizOptions;
}

export default (yuml, options) =>
  yuml2svg(yuml, options, getVizOptions()).then(svg => {
    const file = new File([svg], "diagram.svg", {
      type: "image/svg+xml",
    });
    URL.revokeObjectURL(previousURL);
    previousURL = URL.createObjectURL(file);
    return previousURL;
  });
