System.register([], function(exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var Greeter;
    return {
        setters:[],
        execute: function() {
            Greeter = (function () {
                function Greeter(greeting) {
                    this.greeting = greeting;
                    this.message = { Text: "Every People" };
                }
                Greeter.prototype.greet = function () {
                    return "<div class=\"message\"><h1 class=\"header1\">" + this.greeting + ", " + this.message.Text + "</h1></div>";
                };
                return Greeter;
            }());
            exports_1("Greeter", Greeter);
        }
    }
});

//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNsYXNzZXMvTWVzc2FnZXMudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7OztZQUlBO2dCQUdJLGlCQUFtQixRQUFnQjtvQkFBaEIsYUFBUSxHQUFSLFFBQVEsQ0FBUTtvQkFGM0IsWUFBTyxHQUFZLEVBQUMsSUFBSSxFQUFFLGNBQWMsRUFBQyxDQUFDO2dCQUViLENBQUM7Z0JBQ2xDLHVCQUFLLEdBQUw7b0JBQ0ksTUFBTSxDQUFDLGtEQUE0QyxJQUFJLENBQUMsUUFBUSxVQUFLLElBQUksQ0FBQyxPQUFPLENBQUMsSUFBSSxnQkFBYSxDQUFDO2dCQUN4RyxDQUFDO2dCQUNULGNBQUM7WUFBRCxDQVBBLEFBT0MsSUFBQTtZQVBELDZCQU9DLENBQUEiLCJmaWxlIjoiY2xhc3Nlcy9NZXNzYWdlcy5qcyIsInNvdXJjZVJvb3QiOiIvYXBwL3RzIn0=
