System.register(['./classes/Messages', './classes/Souls', './classes/People'], function(exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var Messages, Souls, People;
    var greeter, soul, person;
    return {
        setters:[
            function (Messages_1) {
                Messages = Messages_1;
            },
            function (Souls_1) {
                Souls = Souls_1;
            },
            function (People_1) {
                People = People_1;
            }],
        execute: function() {
            greeter = new Messages.Greeter("Hello World");
            soul = new Souls.Soul();
            person = new People.Person(soul);
            person.setFirstName("Josef");
            person.setLastName("Smith");
            document.body.innerHTML = greeter.greet() + person.getFullName();
        }
    }
});

//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwcC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O1FBSUksT0FBTyxFQUNQLElBQUksRUFDSixNQUFNOzs7Ozs7Ozs7Ozs7O1lBRk4sT0FBTyxHQUFHLElBQUksUUFBUSxDQUFDLE9BQU8sQ0FBQyxhQUFhLENBQUMsQ0FBQztZQUM5QyxJQUFJLEdBQUcsSUFBSSxLQUFLLENBQUMsSUFBSSxFQUFFLENBQUM7WUFDeEIsTUFBTSxHQUFHLElBQUksTUFBTSxDQUFDLE1BQU0sQ0FBQyxJQUFJLENBQUMsQ0FBQztZQUNyQyxNQUFNLENBQUMsWUFBWSxDQUFDLE9BQU8sQ0FBQyxDQUFBO1lBQzVCLE1BQU0sQ0FBQyxXQUFXLENBQUMsT0FBTyxDQUFDLENBQUM7WUFFNUIsUUFBUSxDQUFDLElBQUksQ0FBQyxTQUFTLEdBQUcsT0FBTyxDQUFDLEtBQUssRUFBRSxHQUFHLE1BQU0sQ0FBQyxXQUFXLEVBQUUsQ0FBQyIsImZpbGUiOiJhcHAuanMiLCJzb3VyY2VSb290IjoiL2FwcC90cyJ9
