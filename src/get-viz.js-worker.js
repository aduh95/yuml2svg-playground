import wasmLoader from "@aduh95/viz.js/dist/render.js";
import wasmLocation from "@aduh95/viz.js/dist/render.wasm";

export default URL.createObjectURL(
  new Blob(
    [
      `var o='${location.origin}';`,
      "self.Module={",
      "locateFile:file=>new URL('/",
      wasmLocation,
      "',o).toString()};",
      "importScripts(new URL('/",
      wasmLoader,
      "',o));",
    ],
    { type: "application/javascript" }
  )
);
