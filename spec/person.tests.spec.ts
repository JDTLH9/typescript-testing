import People = require('../app/ts/classes/People');
import Souls = require('../app/ts/classes/Souls');

describe("Person FullName", () => {

    var person;

    beforeEach(() => {
        var soul = jasmine.createSpyObj("soul", ["GetSoulName"]);
        soul.GetSoulName.and.returnValue("I am a happy little soul");
        
        person = new People.Person(<Souls.ISoul>soul);
        person.setFirstName("Joe");
        person.setLastName("Smith");
    });

    it("should concatenate first and last names", () => {
        expect(person.getFullName()).toBe("Joe, Smith (My soul is called: 'I am a happy little soul')");
    });

    it("should concatenate first and last names - incorrect", () => {
        expect(person.getFullName()).not.toBe("Joe, Doe");
    });

    it("should concatenate lastname first", () => {
        expect(person.getFullName(true)).toBe("Smith, Joe (My soul is called: 'I am a happy little soul')");
    });

    it("should not concatinate firstname first", () => {
        expect(person.getFullName(true)).not.toBe("Smith, John (My soul is called: 'I am a happy little soul')");
    });
});