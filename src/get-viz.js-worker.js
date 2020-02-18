import loadWASM from "@aduh95/viz.js/dist/render.browser.js";
import wasmLocation from "@aduh95/viz.js/dist/render.wasm";

loadWASM({
  locateFile: () => wasmLocation,
});
