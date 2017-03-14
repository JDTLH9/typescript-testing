System.register([], function(exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var Person;
    return {
        setters:[],
        execute: function() {
            Person = (function () {
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
            exports_1("Person", Person);
        }
    }
});

//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNsYXNzZXMvUGVvcGxlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7WUFNQTtnQkFNSSxnQkFBb0IsSUFBaUI7b0JBQWpCLFNBQUksR0FBSixJQUFJLENBQWE7b0JBQ2pDLElBQUksQ0FBQyxRQUFRLEdBQUcsSUFBSSxDQUFDLFdBQVcsRUFBRSxDQUFDO2dCQUN2QyxDQUFDO2dCQUVELDZCQUFZLEdBQVosVUFBYSxLQUFhO29CQUN0QixJQUFJLENBQUMsU0FBUyxHQUFHLEtBQUssQ0FBQztnQkFDM0IsQ0FBQztnQkFFRCw0QkFBVyxHQUFYLFVBQVksS0FBYTtvQkFDckIsSUFBSSxDQUFDLFFBQVEsR0FBRyxLQUFLLENBQUM7Z0JBQzFCLENBQUM7Z0JBRUQsNEJBQVcsR0FBWCxVQUFZLGFBQThCO29CQUE5Qiw2QkFBOEIsR0FBOUIscUJBQThCO29CQUN0QyxJQUFJLFFBQVEsR0FBSSwwQkFBd0IsSUFBSSxDQUFDLFFBQVEsT0FBSSxDQUFDO29CQUMxRCxFQUFFLENBQUMsQ0FBQyxhQUFhLENBQUMsQ0FBQyxDQUFDO3dCQUNoQixNQUFNLENBQUksSUFBSSxDQUFDLFFBQVEsVUFBSyxJQUFJLENBQUMsU0FBUyxTQUFJLFFBQVUsQ0FBQztvQkFDN0QsQ0FBQztvQkFFRCxNQUFNLENBQUksSUFBSSxDQUFDLFNBQVMsVUFBSyxJQUFJLENBQUMsUUFBUSxTQUFJLFFBQVUsQ0FBQztnQkFDN0QsQ0FBQztnQkFDTCxhQUFDO1lBQUQsQ0ExQkEsQUEwQkMsSUFBQTtZQTFCRCwyQkEwQkMsQ0FBQSIsImZpbGUiOiJjbGFzc2VzL1Blb3BsZS5qcyIsInNvdXJjZVJvb3QiOiIvYXBwL3RzIn0=
