import yuml2svg from "yuml2svg";

const LOADING_CLASS = "loading";
const ERROR_CLASS = "error";

let errorElement;

const getErrorDialog = () => {
  if (!errorElement) {
    errorElement = document.createElement("div");
    errorElement.className = ERROR_CLASS;
    document.body.appendChild(errorElement);
  } else {
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

  textEditor.addEventListener("input", event => {
    resultBlock.classList.add(LOADING_CLASS);
    yuml2svg(event.target.value, {}, { worker: "vizWorker.js" })
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
  });
});
