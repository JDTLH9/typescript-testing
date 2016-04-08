export interface Message{
    Text: string;
}

export class Greeter{
    private message: Message = {Text: "Every People"};
    
    constructor(public greeting: string){}
        greet(){
            return `<div class="message"><h1 class="header1">${this.greeting}, ${this.message.Text}</h1></div>`;
        }
}