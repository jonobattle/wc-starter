const states = new WeakMap();
import { controller } from "@github/catalyst";

@controller
class HelloWcDisplayElement extends HTMLElement {
  constructor() {
    super()
    const state = { message: "empty" };
  }

  static get observedAttrbutes() {
    return ["message"];
  }

  attributeChangedCallback(name: string, value: string) {
    console.log("IN TEH DISPLAY: " + newVal);
    if (name === "message") {
      this.message = newVal;
    }
  }

  update() {
    this.innerHTML = `
      <h1>${this.message}</h1>
    `;
  }
}

export default HelloWcDisplayElement;
