import yuml2svg from "https://dev.jspm.io/npm:yuml2svg@5.0.0-beta.11/index.mjs";

const locateFile = fileName =>
  "https://unpkg.com/@aduh95/viz.js@3.0.0-beta.6/dist/" + fileName;
const onmessage = async function(event) {
  if (this.messageHandler === undefined) {
    // Lazy loading actual handler
    const { default: init, onmessage } = await import(
      Module.locateFile("render.browser.js")
    );
    // Removing default MessageEvent handler
    removeEventListener("message", onmessage);
    await init(Module);
    this.messageHandler = onmessage;
  }
  return this.messageHandler(event);
};
const workerURL = URL.createObjectURL(
  new Blob(
    [
      "const Module = { locateFile:",
      locateFile.toString(),
      "};",
      "onmessage=",
      onmessage.toString(),
    ],
    { type: "application/javascript" }
  )
);
const vizOptions = { workerURL };

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
