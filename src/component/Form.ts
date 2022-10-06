class Form {
  formElement!: HTMLFormElement;
  inputElement!: HTMLInputElement;
  buttonElement!: HTMLInputElement;

  private static instance: Form;

  constructor(){
    this.formElement = document.getElementById('plan-form') as HTMLFormElement;
    this.inputElement = document.getElementById('plan-input') as HTMLInputElement;

    this.configure();
  }

  static getInstance(){
    if(this.instance){
      return this.instance
    }
    this.instance = new Form();
    return this.instance
  }
  
  
  private submitHandler = (event: Event) => {
    event.preventDefault();
    const userInput = this.inputElement.value;
    console.log(userInput);
    this.clearInput();
  }

  private clearInput () {
    this.inputElement.value = '';
  }

  configure(){
    this.formElement.addEventListener('submit', this.submitHandler)
  }
}

const form = Form.getInstance();