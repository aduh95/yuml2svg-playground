import { h } from "preact";

/** Fragment is a "passthrough" component which only has the key attribute
 * @param {object} props Props (eg: JSX attributes, only key is supported)
 */
export function Fragment(props) {
  const frag = document.createDocumentFragment();

  return <div style="display:contents;">{props.children}</div>;
}
