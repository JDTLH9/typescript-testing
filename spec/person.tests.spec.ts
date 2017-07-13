import {Person} from '../app/ts/classes/People';
import {ISoul} from '../app/ts/classes/Souls';

describe("Person FullName", () => {
    let person;

    beforeEach(() => {
        let soul: ISoul = jasmine.createSpyObj<ISoul>("soul", ["GetSoulName"]);
        (<jasmine.Spy>soul.GetSoulName).and.returnValue("I am a happy little soul");
        
        person = new Person(soul);
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