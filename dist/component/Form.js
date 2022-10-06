"use strict";
class Form {
    constructor() {
        this.submitHandler = (event) => {
            event.preventDefault();
            const userInput = this.inputElement.value;
            console.log(userInput);
            this.clearInput();
        };
        this.formElement = document.getElementById('plan-form');
        this.inputElement = document.getElementById('plan-input');
        this.configure();
    }
    static getInstance() {
        if (this.instance) {
            return this.instance;
        }
        this.instance = new Form();
        return this.instance;
    }
    clearInput() {
        this.inputElement.value = '';
    }
    configure() {
        this.formElement.addEventListener('submit', this.submitHandler);
    }
}
const form = Form.getInstance();
//# sourceMappingURL=Form.js.map