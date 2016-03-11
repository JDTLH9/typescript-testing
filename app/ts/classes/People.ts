import {Souls} from './Souls';

export module People {
    export interface IPerson {
        getFullName(): string;
    }

    export class Person implements IPerson {

        private firstName: string;
        private lastName: string;
        private soulName: string;

        constructor(soul: Souls.ISoul) {
            this.soulName = soul.GetSoulName();
        }

        setFirstName(value: string) {
            this.firstName = value;
        }

        setLastName(value: string) {
            this.lastName = value;
        }

        getFullName(lastNameFirst: boolean = false): string {
            var fullName;
            if (lastNameFirst) {
                fullName = this.lastName + ", " + this.firstName;
            }
            
            fullName = this.firstName + ", " + this.lastName
            
            return fullName + " (My soul is called: '" + this.soulName + "')";
        }
    }
}