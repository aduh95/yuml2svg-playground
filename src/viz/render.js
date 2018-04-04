class WorkerWrapper {
  constructor(url) {
    this.worker = new Worker(url);
    this.listeners = [];
    this.nextId = 0;
    
    this.worker.addEventListener('message', (event) => {
      let id = event.data.id;
      let error = event.data.error;
      let result = event.data.result;

      this.listeners[id](error, result);
      delete this.listeners[id];
    });
  }
  
  render(src, format, engine) {
    return new Promise((resolve, reject) => {
      let id = this.nextId++;
    
      this.listeners[id] = function(error, result) {
        if (error) {
          reject(new Error(error.message, error.fileName, error.lineNumber));
          return;
        }
        resolve(result);
      };
    
      this.worker.postMessage({ id, src, format, engine });
    });
  }
}

let wrappers = {};

function getWrapper(url) {
  if (typeof wrappers[url] === 'undefined') {
    wrappers[url] = new WorkerWrapper(url);
  }
  
  return Promise.resolve(wrappers[url]);
}

function renderString(src, options = {}) {
  let { format = 'svg', engine = 'dot', worker } = options;
  
  return getWrapper(worker)
  .then(wrapper => wrapper.render(src, format, engine));
}

function renderSVGElement(src, options = {}) {
  return renderString(src, { ...options, format: 'svg' })
  .then(str => {
    let parser = new DOMParser();
    return parser.parseFromString(str, 'image/svg+xml').documentElement;
  });
}

// https://developer.mozilla.org/en-US/docs/Web/API/WindowBase64/Base64_encoding_and_decoding
function b64EncodeUnicode(str) {
  return btoa(encodeURIComponent(str).replace(/%([0-9A-F]{2})/g, function(match, p1) {
    return String.fromCharCode('0x' + p1);
  }));
}

function defaultScale(scale) {
  if ('devicePixelRatio' in window && window.devicePixelRatio > 1) {
    return window.devicePixelRatio;
  } else {
    return 1;
  }
}

function svgXmlToImageElement(svgXml, { scale, mimeType = "image/png", quality = 1 } = {}) {
  if (typeof scale === 'undefined') {
    scale = defaultScale(scale);
  }
  
  return new Promise((resolve, reject) => {
    let svgImage = new Image();

    svgImage.onload = function() {
      let canvas = document.createElement('canvas');
      canvas.width = svgImage.width * scale;
      canvas.height = svgImage.height * scale;

      let context = canvas.getContext("2d");
      context.drawImage(svgImage, 0, 0, canvas.width, canvas.height);
      
      canvas.toBlob(blob => {
        let image = new Image();
        image.src = URL.createObjectURL(blob);
        image.width = svgImage.width;
        image.height = svgImage.height;
        
        resolve(image);
      }, mimeType, quality);
    }

    svgImage.onerror = function(e) {
      var error;
  
      if ('error' in e) {
        error = e.error;
      } else {
        error = new Error('Error loading SVG');
      }
  
      reject(error);
    }

    svgImage.src = 'data:image/svg+xml;base64,' + b64EncodeUnicode(svgXml);
  });
}

function renderImageElement(src, options = {}) {
  let { scale, mimeType, quality } = options;

  return renderString(src, { ...options, format: 'svg' })
  .then(str => {
    return svgXmlToImageElement(str, { scale, mimeType, quality });
  });
}

export { renderString, renderSVGElement, renderImageElement };
