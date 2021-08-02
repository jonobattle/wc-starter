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
        <hello-wc-display data-message="${this.message}"></hello-wc-display>

        <div style="padding: 1em; background-color: #f7f7f7;">
          <hello-wc-message data-action="customsubmit:hello-wc#alert"></hello-wc-message>
        </div>
      </section>
    `
  }
}

export default HelloWcElement;
