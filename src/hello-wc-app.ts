import { attr, controller, target } from "@github/catalyst";

@controller
class HelloWcElement extends HTMLElement {
  @attr message = "";

  connectedCallback() {
    this.update();
  }

  alert(event: CustomEvent) {
    const detail = event.detail;
    this.message = detail;
    this.update();
  }

  update() {
    this.innerHTML = `
      <h1>Web Component Starter</h1>
      <section class="welcome">
        <small>Temp ${this.message}</small>
        <hello-wc-message data-action="customsubmit:hello-wc#alert"></hello-wc-message>
        <hello-wc-display message="${this.message}"></hello-wc-display>
      </section>
    `
  }
}

export default HelloWcElement;
