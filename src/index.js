import yuml2svg from "yuml2svg";

const LOADING_CLASS = "loading";
const ERROR_CLASS = "error";

const STORAGE_KEY = "yuml";

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

  textEditor.value = localStorage.getItem(STORAGE_KEY);

  const compute = event => {
    resultBlock.classList.add(LOADING_CLASS);
    yuml2svg(textEditor.value, {}, { workerURL: "vizWorker.js" })
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
