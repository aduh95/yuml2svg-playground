import yuml2svg from "yuml2svg";

document.addEventListener("DOMContentLoaded", () => {
  document.getElementById("text-editor").addEventListener("input", event => {
    yuml2svg(event.target.value, {}, { worker: "vizWorker.js" }).then(svg => {
      document.getElementById("result").innerHTML = svg;
    });
  });
});
