import wasmLoader from "@aduh95/viz.js/dist/render.js";
import wasmLocation from "@aduh95/viz.js/dist/render.wasm";

if ("function" !== typeof URL.createObjectURL) {
  // necessary for JSDOM to parse module on prerender
  URL.createObjectURL = Function.prototype;
}

const { href } = location;
const scope = href.substring(0, href.lastIndexOf("/") + 1);

export default URL.createObjectURL(
  new Blob(
    [
      `var o='${scope}';`,
      "self.Module={",
      "locateFile:file=>new URL('",
      wasmLocation,
      "',o).toString()};",
      "importScripts(new URL('",
      wasmLoader,
      "',o));",
    ],
    { type: "application/javascript" }
  )
);
