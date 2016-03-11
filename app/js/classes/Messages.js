System.register([], function(exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var Messages;
    return {
        setters:[],
        execute: function() {
            (function (Messages) {
                var Greeter = (function () {
                    function Greeter(greeting) {
                        this.greeting = greeting;
                        this.message = { Text: "People" };
                    }
                    Greeter.prototype.greet = function () {
                        return '<div class="message"><h1 class="header1">' + this.greeting + ', ' + this.message.Text + '</h1></div>';
                    };
                    return Greeter;
                }());
                Messages.Greeter = Greeter;
            })(Messages = Messages || (Messages = {}));
            exports_1("Messages", Messages);
        }
    }
});

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNsYXNzZXMvTWVzc2FnZXMudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7OztZQUFBLFdBQWMsUUFBUSxFQUFDLENBQUM7Z0JBS3BCO29CQUdJLGlCQUFtQixRQUFnQjt3QkFBaEIsYUFBUSxHQUFSLFFBQVEsQ0FBUTt3QkFGM0IsWUFBTyxHQUFZLEVBQUMsSUFBSSxFQUFFLFFBQVEsRUFBQyxDQUFDO29CQUVQLENBQUM7b0JBQ2xDLHVCQUFLLEdBQUw7d0JBQ0ksTUFBTSxDQUFDLDJDQUEyQyxHQUFHLElBQUksQ0FBQyxRQUFRLEdBQUcsSUFBSSxHQUFHLElBQUksQ0FBQyxPQUFPLENBQUMsSUFBSSxHQUFHLGFBQWEsQ0FBQztvQkFDbEgsQ0FBQztvQkFDVCxjQUFDO2dCQUFELENBUEEsQUFPQyxJQUFBO2dCQVBZLGdCQUFPLFVBT25CLENBQUE7WUFDTCxDQUFDLEVBYmEsUUFBUSxHQUFSLFFBQVEsS0FBUixRQUFRLFFBYXJCOzRDQUFBIiwiZmlsZSI6ImNsYXNzZXMvTWVzc2FnZXMuanMiLCJzb3VyY2VSb290IjoiL3RzIn0=
