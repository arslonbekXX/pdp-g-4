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

var Father = /** @class */ (function () {
    function Father(fatherName) {
        this.fatherName = fatherName;
    }
    return Father;
}());


var Person = /** @class */ (function (_super) {
    __extends(Person, _super);
    function Person(name, birthYear, fatherName) {
        var _this = _super.call(this, fatherName) || this;
        _this.name = name;
        _this.birthYear = birthYear;
        return _this;
    }
    Person.prototype.run = function () {
        console.log("".concat(this.name, " is running...\uD83C\uDFC3\u200D\u2642\uFE0F"));
    };
    Person.prototype.eat = function () {
        console.log("".concat(this.name, " is eating... \uD83C\uDF7D\uFE0F"));
    };
    return Person;
}(Father));
