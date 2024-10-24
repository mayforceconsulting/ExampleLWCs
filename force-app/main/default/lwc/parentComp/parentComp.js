import { LightningElement } from 'lwc';

export default class ParentComp extends LightningElement {

    messageFromChild = '';
    inputMessage = '';
    messageToChild = '';
    
    handleInputChange(event) {
        this.inputMessage = event.detail.value;
    }

    handleClick() {
        //Send the message to the child via the API var
        this.messageToChild = this.inputMessage;
    }

    handleMessageFromChild(event) {
        this.messageFromChild = event.detail;
    }

}