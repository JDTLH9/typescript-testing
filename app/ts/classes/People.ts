import {Souls} from './Souls';

export module People {
    export interface IPerson {
        getFullName(): string;
    }

    export class Person implements IPerson {

        private firstName: string;
        private lastName: string;
        private soulName: string;

        constructor(private soul: Souls.ISoul) {
            this.soulName = soul.GetSoulName();
        }

        setFirstName(value: string) {
            this.firstName = value;
        }

        setLastName(value: string) {
            this.lastName = value;
        }

        getFullName(lastNameFirst: boolean = false): string {
            var soulName =  `(My soul is called: '${this.soulName}')`;
            if (lastNameFirst) {
                return `${this.lastName}, ${this.firstName} ${soulName}`;
            }

            return `${this.firstName}, ${this.lastName} ${soulName}`;
        }
    }
}