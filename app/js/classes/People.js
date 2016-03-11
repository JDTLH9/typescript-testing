System.register([], function(exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var People;
    return {
        setters:[],
        execute: function() {
            (function (People) {
                var Person = (function () {
                    function Person(soul) {
                        this.soulName = soul.GetSoulName();
                    }
                    Person.prototype.setFirstName = function (value) {
                        this.firstName = value;
                    };
                    Person.prototype.setLastName = function (value) {
                        this.lastName = value;
                    };
                    Person.prototype.getFullName = function (lastNameFirst) {
                        if (lastNameFirst === void 0) { lastNameFirst = false; }
                        var fullName;
                        if (lastNameFirst) {
                            fullName = this.lastName + ", " + this.firstName;
                        }
                        fullName = this.firstName + ", " + this.lastName;
                        return fullName + " (My soul is called: '" + this.soulName + "')";
                    };
                    return Person;
                }());
                People.Person = Person;
            })(People = People || (People = {}));
            exports_1("People", People);
        }
    }
});

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNsYXNzZXMvUGVvcGxlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7WUFFQSxXQUFjLE1BQU0sRUFBQyxDQUFDO2dCQUtsQjtvQkFNSSxnQkFBWSxJQUFpQjt3QkFDekIsSUFBSSxDQUFDLFFBQVEsR0FBRyxJQUFJLENBQUMsV0FBVyxFQUFFLENBQUM7b0JBQ3ZDLENBQUM7b0JBRUQsNkJBQVksR0FBWixVQUFhLEtBQWE7d0JBQ3RCLElBQUksQ0FBQyxTQUFTLEdBQUcsS0FBSyxDQUFDO29CQUMzQixDQUFDO29CQUVELDRCQUFXLEdBQVgsVUFBWSxLQUFhO3dCQUNyQixJQUFJLENBQUMsUUFBUSxHQUFHLEtBQUssQ0FBQztvQkFDMUIsQ0FBQztvQkFFRCw0QkFBVyxHQUFYLFVBQVksYUFBOEI7d0JBQTlCLDZCQUE4QixHQUE5QixxQkFBOEI7d0JBQ3RDLElBQUksUUFBUSxDQUFDO3dCQUNiLEVBQUUsQ0FBQyxDQUFDLGFBQWEsQ0FBQyxDQUFDLENBQUM7NEJBQ2hCLFFBQVEsR0FBRyxJQUFJLENBQUMsUUFBUSxHQUFHLElBQUksR0FBRyxJQUFJLENBQUMsU0FBUyxDQUFDO3dCQUNyRCxDQUFDO3dCQUVELFFBQVEsR0FBRyxJQUFJLENBQUMsU0FBUyxHQUFHLElBQUksR0FBRyxJQUFJLENBQUMsUUFBUSxDQUFBO3dCQUVoRCxNQUFNLENBQUMsUUFBUSxHQUFHLHdCQUF3QixHQUFHLElBQUksQ0FBQyxRQUFRLEdBQUcsSUFBSSxDQUFDO29CQUN0RSxDQUFDO29CQUNMLGFBQUM7Z0JBQUQsQ0E1QkEsQUE0QkMsSUFBQTtnQkE1QlksYUFBTSxTQTRCbEIsQ0FBQTtZQUNMLENBQUMsRUFsQ2EsTUFBTSxHQUFOLE1BQU0sS0FBTixNQUFNLFFBa0NuQjt3Q0FBQSIsImZpbGUiOiJjbGFzc2VzL1Blb3BsZS5qcyIsInNvdXJjZVJvb3QiOiIvdHMifQ==
