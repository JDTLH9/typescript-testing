System.register(['./classes/Messages', './classes/Souls', './classes/People'], function(exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var Messages_1, Souls_1, People_1;
    var greeter, soul, person;
    return {
        setters:[
            function (Messages_1_1) {
                Messages_1 = Messages_1_1;
            },
            function (Souls_1_1) {
                Souls_1 = Souls_1_1;
            },
            function (People_1_1) {
                People_1 = People_1_1;
            }],
        execute: function() {
            greeter = new Messages_1.Messages.Greeter("Hello World");
            soul = new Souls_1.Souls.Soul();
            person = new People_1.People.Person(soul);
            person.setFirstName("Josef");
            person.setLastName("Smith");
            document.body.innerHTML = greeter.greet() + person.getFullName();
        }
    }
});

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwcC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O1FBSUksT0FBTyxFQUNQLElBQUksRUFDSixNQUFNOzs7Ozs7Ozs7Ozs7O1lBRk4sT0FBTyxHQUFHLElBQUksbUJBQVEsQ0FBQyxPQUFPLENBQUMsYUFBYSxDQUFDLENBQUM7WUFDOUMsSUFBSSxHQUFHLElBQUksYUFBSyxDQUFDLElBQUksRUFBRSxDQUFDO1lBQ3hCLE1BQU0sR0FBRyxJQUFJLGVBQU0sQ0FBQyxNQUFNLENBQUMsSUFBSSxDQUFDLENBQUM7WUFDckMsTUFBTSxDQUFDLFlBQVksQ0FBQyxPQUFPLENBQUMsQ0FBQTtZQUM1QixNQUFNLENBQUMsV0FBVyxDQUFDLE9BQU8sQ0FBQyxDQUFDO1lBRTVCLFFBQVEsQ0FBQyxJQUFJLENBQUMsU0FBUyxHQUFHLE9BQU8sQ0FBQyxLQUFLLEVBQUUsR0FBRyxNQUFNLENBQUMsV0FBVyxFQUFFLENBQUMiLCJmaWxlIjoiYXBwLmpzIiwic291cmNlUm9vdCI6Ii90cyJ9
