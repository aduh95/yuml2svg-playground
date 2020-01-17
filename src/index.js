import yuml2svg from "https://dev.jspm.io/yuml2svg@5";

const vizOptions = {
  workerURL: [
    "data:application/javascript",
    "importScripts('https://unpkg.com/viz.js@2.1.2/full.render.js')",
  ].join(","),
};

const LOADING_CLASS = "loading";
const ERROR_CLASS = "error";

const STORAGE_KEY = "yuml";

let errorElement;

const getErrorDialog = () => {
  if (!errorElement) {
    errorElement = document.createElement("div");
    errorElement.className = ERROR_CLASS;
    document.body.append(errorElement);
  } else if (errorElement.firstChild) {
    errorElement.firstChild.remove();
  }

  return errorElement;
};

const setErrorDialog = error => {
  getErrorDialog().appendChild(document.createTextNode(error.message));
};

const removeErrorDialog = () => {
  if (errorElement) {
    errorElement.remove();
    errorElement = null;
  }
};

document.addEventListener("DOMContentLoaded", () => {
  const textEditor = document.getElementById("text-editor");
  const resultBlock = document.getElementById("result");

  textEditor.value = localStorage.getItem(STORAGE_KEY);

  const compute = event => {
    resultBlock.classList.add(LOADING_CLASS);
    yuml2svg(textEditor.value, {}, vizOptions)
      .then(svg => {
        resultBlock.innerHTML = svg;
        removeErrorDialog();
      })
      .catch(err => {
        console.error(err);
        setErrorDialog(err);
      })
      .finally(() => {
        resultBlock.classList.remove(LOADING_CLASS);
      });
  };

  textEditor.addEventListener("input", compute);
  compute();
});

addEventListener("unload", () => {
  localStorage.setItem(
    STORAGE_KEY,
    document.getElementById("text-editor").value
  );
});
