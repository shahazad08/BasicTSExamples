var Person = /** @class */ (function () {
    function Person(id, name) {
        this.id = id;
        this.name = name;
    }
    // console.log(123);
    Person.prototype.register = function () {
        return "".concat(this.name, " is now registered");
    };
    return Person;
}());
var brad = new Person(1, 'Shaikh');
var mike = new Person(2, 'Shahazad');
console.log(brad.register());
console.log(brad.id, mike);
