import {Messages} from './classes/Messages';
import {Souls} from './classes/Souls';
import {People} from './classes/People';

var greeter = new Messages.Greeter("Hello World");
var soul = new Souls.Soul();
var person = new People.Person(soul);
person.setFirstName("Josef")
person.setLastName("Smith");

document.body.innerHTML = greeter.greet() + person.getFullName();