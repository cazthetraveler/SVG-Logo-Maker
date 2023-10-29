const Shapes = require("./shapes.js");
const Circle = Shapes.Circle;
const Triangle = Shapes.Triangle;
const Square = Shapes.Square;

describe("Circle", () => {
    describe("setColor", () => {
        it("Should return the shape format with the set color", () => {
            const shape = new Circle();
            shape.setColor("#B11226");
            expect(shape.render()).toEqual('<circle cx="150" cy="100" r="80" fill="#B11226" />');
        });
    });
    describe("checkTextColor", () => {
        it("Should return the text format with the set color", () => {
            const shape = new Circle();
            shape.checkTextColor("#1C1C1C");
            expect(shape.renderText()).toEqual('<text x="50%" y="55%" font-size="60" text-anchor="middle" fill="#1C1C1C">');
        });
    });
});

describe("Triangle", () => {
    describe("setColor", () => {
        it("Should return the shape format with the set color", () => {
            const shape = new Triangle();
            shape.setColor("#FFCE00");
            expect(shape.render()).toEqual('<polygon points="150, 18 244, 182 56, 182" fill="#FFCE00" />');
        });
    });
});

describe("Square", () => {
    describe("setColor", () => {
        it("Should return the shape format with the set color", () => {
            const shape = new Square();
            shape.setColor("#CA1F7B");
            expect(shape.render()).toEqual('<rect width="150" height="150" fill="#CA1F7B" />');
        });
    });
});