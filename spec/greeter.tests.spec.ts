import {Messages} from '../app/ts/classes/Messages';

describe("Greeter Tests", () => {
    var greeter = new Messages.Greeter("Hello World");
    
    it("should have a message of hello world", () => {
        expect(greeter.greeting).toBe("Hello World")  
    });
})