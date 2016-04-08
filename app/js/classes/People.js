System.register([], function(exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var Person;
    return {
        setters:[],
        execute: function() {
            class Person {
                constructor(soul) {
                    this.soul = soul;
                    this.soulName = soul.GetSoulName();
                }
                setFirstName(value) {
                    this.firstName = value;
                }
                setLastName(value) {
                    this.lastName = value;
                }
                getFullName(lastNameFirst = false) {
                    var soulName = `(My soul is called: '${this.soulName}')`;
                    if (lastNameFirst) {
                        return `${this.lastName}, ${this.firstName} ${soulName}`;
                    }
                    return `${this.firstName}, ${this.lastName} ${soulName}`;
                }
            }
            exports_1("Person", Person);
        }
    }
});

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNsYXNzZXMvUGVvcGxlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7WUFNQTtnQkFNSSxZQUFvQixJQUFpQjtvQkFBakIsU0FBSSxHQUFKLElBQUksQ0FBYTtvQkFDakMsSUFBSSxDQUFDLFFBQVEsR0FBRyxJQUFJLENBQUMsV0FBVyxFQUFFLENBQUM7Z0JBQ3ZDLENBQUM7Z0JBRUQsWUFBWSxDQUFDLEtBQWE7b0JBQ3RCLElBQUksQ0FBQyxTQUFTLEdBQUcsS0FBSyxDQUFDO2dCQUMzQixDQUFDO2dCQUVELFdBQVcsQ0FBQyxLQUFhO29CQUNyQixJQUFJLENBQUMsUUFBUSxHQUFHLEtBQUssQ0FBQztnQkFDMUIsQ0FBQztnQkFFRCxXQUFXLENBQUMsYUFBYSxHQUFZLEtBQUs7b0JBQ3RDLElBQUksUUFBUSxHQUFJLHdCQUF3QixJQUFJLENBQUMsUUFBUSxJQUFJLENBQUM7b0JBQzFELEVBQUUsQ0FBQyxDQUFDLGFBQWEsQ0FBQyxDQUFDLENBQUM7d0JBQ2hCLE1BQU0sQ0FBQyxHQUFHLElBQUksQ0FBQyxRQUFRLEtBQUssSUFBSSxDQUFDLFNBQVMsSUFBSSxRQUFRLEVBQUUsQ0FBQztvQkFDN0QsQ0FBQztvQkFFRCxNQUFNLENBQUMsR0FBRyxJQUFJLENBQUMsU0FBUyxLQUFLLElBQUksQ0FBQyxRQUFRLElBQUksUUFBUSxFQUFFLENBQUM7Z0JBQzdELENBQUM7WUFDTCxDQUFDO1lBMUJELDJCQTBCQyxDQUFBIiwiZmlsZSI6ImNsYXNzZXMvUGVvcGxlLmpzIiwic291cmNlUm9vdCI6Ii9hcHAvdHMifQ==
