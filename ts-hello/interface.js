var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var Persons = /** @class */ (function () {
    function Persons(id, name) {
        this.id = id;
        this.name = name;
    }
    // console.log(123);
    Persons.prototype.register = function () {
        return "".concat(this.name, " is now registered");
    };
    return Persons;
}());
var shez = new Persons(1, 'Shaikh');
var shaz = new Persons(2, 'Shahazad');
// Subclass
var Employee = /** @class */ (function (_super) {
    __extends(Employee, _super);
    function Employee(id, name, position) {
        var _this = _super.call(this, id, name) || this;
        _this.position = position;
        return _this;
    }
    return Employee;
}(Persons));
var emp = new Employee(3, 'shawn', 'Developer');
console.log(emp);
console.log(emp.register());
