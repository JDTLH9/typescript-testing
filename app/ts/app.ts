import Messages = require('./classes/Messages');
import Souls = require('./classes/Souls');
import People = require('./classes/People');

var greeter = new Messages.Greeter("Hello World");
var soul = new Souls.Soul();
var person = new People.Person(soul);
person.setFirstName("Josef")
person.setLastName("Smith");

document.body.innerHTML = greeter.greet() + person.getFullName();