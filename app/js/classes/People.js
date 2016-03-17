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
                        this.soul = soul;
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
                        var soulName = "(My soul is called: '" + this.soulName + "')";
                        if (lastNameFirst) {
                            return this.lastName + ", " + this.firstName + " " + soulName;
                        }
                        return this.firstName + ", " + this.lastName + " " + soulName;
                    };
                    return Person;
                }());
                People.Person = Person;
            })(People = People || (People = {}));
            exports_1("People", People);
        }
    }
});

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNsYXNzZXMvUGVvcGxlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7WUFFQSxXQUFjLE1BQU0sRUFBQyxDQUFDO2dCQUtsQjtvQkFNSSxnQkFBb0IsSUFBaUI7d0JBQWpCLFNBQUksR0FBSixJQUFJLENBQWE7d0JBQ2pDLElBQUksQ0FBQyxRQUFRLEdBQUcsSUFBSSxDQUFDLFdBQVcsRUFBRSxDQUFDO29CQUN2QyxDQUFDO29CQUVELDZCQUFZLEdBQVosVUFBYSxLQUFhO3dCQUN0QixJQUFJLENBQUMsU0FBUyxHQUFHLEtBQUssQ0FBQztvQkFDM0IsQ0FBQztvQkFFRCw0QkFBVyxHQUFYLFVBQVksS0FBYTt3QkFDckIsSUFBSSxDQUFDLFFBQVEsR0FBRyxLQUFLLENBQUM7b0JBQzFCLENBQUM7b0JBRUQsNEJBQVcsR0FBWCxVQUFZLGFBQThCO3dCQUE5Qiw2QkFBOEIsR0FBOUIscUJBQThCO3dCQUN0QyxJQUFJLFFBQVEsR0FBSSwwQkFBd0IsSUFBSSxDQUFDLFFBQVEsT0FBSSxDQUFDO3dCQUMxRCxFQUFFLENBQUMsQ0FBQyxhQUFhLENBQUMsQ0FBQyxDQUFDOzRCQUNoQixNQUFNLENBQUksSUFBSSxDQUFDLFFBQVEsVUFBSyxJQUFJLENBQUMsU0FBUyxTQUFJLFFBQVUsQ0FBQzt3QkFDN0QsQ0FBQzt3QkFFRCxNQUFNLENBQUksSUFBSSxDQUFDLFNBQVMsVUFBSyxJQUFJLENBQUMsUUFBUSxTQUFJLFFBQVUsQ0FBQztvQkFDN0QsQ0FBQztvQkFDTCxhQUFDO2dCQUFELENBMUJBLEFBMEJDLElBQUE7Z0JBMUJZLGFBQU0sU0EwQmxCLENBQUE7WUFDTCxDQUFDLEVBaENhLE1BQU0sR0FBTixNQUFNLEtBQU4sTUFBTSxRQWdDbkI7d0NBQUEiLCJmaWxlIjoiY2xhc3Nlcy9QZW9wbGUuanMiLCJzb3VyY2VSb290IjoiL2FwcC90cyJ9
