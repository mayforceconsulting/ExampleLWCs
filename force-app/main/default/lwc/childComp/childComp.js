import { LightningElement, api } from "lwc";

export default class ChildComp extends LightningElement {
  @api message;
  messageFromChild = '';

  handleChange(event) {
    this.messageFromChild = event.detail.value;
  }

  handleClick() {
    this.dispatchEvent(
      new CustomEvent("send", {
        detail: this.messageFromChild
      })
    );
  }
}
