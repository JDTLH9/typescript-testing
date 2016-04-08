System.register([], function(exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var Greeter;
    return {
        setters:[],
        execute: function() {
            class Greeter {
                constructor(greeting) {
                    this.greeting = greeting;
                    this.message = { Text: "Every People" };
                }
                greet() {
                    return `<div class="message"><h1 class="header1">${this.greeting}, ${this.message.Text}</h1></div>`;
                }
            }
            exports_1("Greeter", Greeter);
        }
    }
});

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNsYXNzZXMvTWVzc2FnZXMudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7OztZQUlBO2dCQUdJLFlBQW1CLFFBQWdCO29CQUFoQixhQUFRLEdBQVIsUUFBUSxDQUFRO29CQUYzQixZQUFPLEdBQVksRUFBQyxJQUFJLEVBQUUsY0FBYyxFQUFDLENBQUM7Z0JBRWIsQ0FBQztnQkFDbEMsS0FBSztvQkFDRCxNQUFNLENBQUMsNENBQTRDLElBQUksQ0FBQyxRQUFRLEtBQUssSUFBSSxDQUFDLE9BQU8sQ0FBQyxJQUFJLGFBQWEsQ0FBQztnQkFDeEcsQ0FBQztZQUNULENBQUM7WUFQRCw2QkFPQyxDQUFBIiwiZmlsZSI6ImNsYXNzZXMvTWVzc2FnZXMuanMiLCJzb3VyY2VSb290IjoiL2FwcC90cyJ9
