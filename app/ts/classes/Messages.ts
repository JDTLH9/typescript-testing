export interface Message{
    Text: string;
}

export class Greeter{
    private message: Message = {Text: "to all my friends and family"};
    
    constructor(public greeting: string){}
        greet(){
            return `<div class="message"><h1 class="header1">${this.greeting}, ${this.message.Text}</h1></div>`;
        }
}