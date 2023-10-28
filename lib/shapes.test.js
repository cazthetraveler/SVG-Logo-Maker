const Shapes = require("./shapes.js");
const Circle = Shapes.Circle;

describe("Circle", () => {
    describe("setColor", () => {
        it("Should return the shape format with the set color", () => {
            const shape = new Circle();
            shape.setColor("#B11226");
            expect(shape.render()).toEqual('<circle cx="150" cy="100" r="80" fill="#B11226" />');
        });
    });
});