import { controller, target } from "@github/catalyst";
import { html, render } from "@github/jtml";

@controller
class HelloWcMessageElement extends HTMLElement {
  @target text: HTMLInputElement;
  #value = "";

  connectedCallback() {
    this.update();
  }

  handleInputChange(event: Event) {
    this.#value = (<HTMLInputElement>event.target).value;
  }

  handleOnSubmit(event: Event) {
    event.preventDefault();
    if (!this.#value) return;
    this.dispatchEvent(new CustomEvent("customsubmit", { detail: this.#value }));

    this.#value = "";
    this.text.value = this.#value;
  }

  update() {
    render(
      html`
        <form data-action="submit:hello-wc-message#handleOnSubmit">
          <input
            data-target="hello-wc-message.text"
            data-action="keyup:hello-wc-message#handleInputChange"
            type="text"
            placeholder="Type your message here"
          />
        </form>
      `,
      this
    )
  }
}

export default HelloWcMessageElement;
