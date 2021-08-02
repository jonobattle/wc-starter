const states = new WeakMap();
import { attr, controller } from "@github/catalyst";

@controller
class HelloWcDisplayElement extends HTMLElement {
  @attr message: string = "Waiting...";

  connectedCallback() {
    this.update();
  }

  update() {
    this.innerHTML = `
      <div style="clear: both;">
        <b>Message:</b> ${this.message}
      </div>
    `;
  }
}

export default HelloWcDisplayElement;
