importScripts('./viz.js');

onmessage = function(event) {
  let id = event.data.id;
  let src = event.data.src;
  let options = event.data.options;
  
  try {
    let result = Viz(src, options);
    postMessage({ id, result });
  } catch (error) {
    postMessage({ id, error: { message: error.message } });
  }
}
