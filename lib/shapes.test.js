const Shapes = require("./shapes.js");
const Circle = Shapes.Circle;
const Triangle = Shapes.Triangle;
const Square = Shapes.Square;

describe("Shape", () => {
    describe("checkShape", () => {
        it("Should return the rendered circle logo.", () => {
            const shape = new Shapes.Shape();
            shape.checkShape();
            expect(shape.checkShape()).toEqual('<svg version="1.1" width="300" height="200" xmlns="http://www.w3.org/2000/svg"><circle cx="150" cy="100" r="80" fill="#B11226" /><text x="50%" y="55%" font-size="60" text-anchor="middle" fill="#1C1C1C">AHA</text></svg>')
        })
    })
})

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
    describe("checkTextLength", () => {
        it("Should return the text that meets criteria of being 3 characters or less.", () => {
            const shape = new Circle();
            shape.checkTextLength("AHA");
            expect(shape.renderTextLength()).toEqual('AHA</text>');
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
    describe("checkTextColor", () => {
        it("Should return the text format with the set color", () => {
            const shape = new Triangle();
            shape.checkTextColor("#000000");
            expect(shape.renderText()).toEqual('<text x="50%" y="65%" font-size="50" text-anchor="middle" fill="#000000">');
        });
    });
    describe("checkTextLength", () => {
        it("Should return the text that meets criteria of being 3 characters or less.", () => {
            const shape = new Triangle();
            shape.checkTextLength("FR");
            expect(shape.renderTextLength()).toEqual('FR</text>');
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
    describe("checkTextColor", () => {
        it("Should return the text format with the set color", () => {
            const shape = new Square();
            shape.checkTextColor("#F2F2F2");
            expect(shape.renderText()).toEqual('<text x="25%" y="45%" text-anchor="middle" font-size="60" fill="#F2F2F2">');
        });
    });
    describe("checkTextLength", () => {
        it("Should return the text that meets criteria of being 3 characters or less.", () => {
            const shape = new Square();
            shape.checkTextLength("LOL");
            expect(shape.renderTextLength()).toEqual('LOL</text>');
        });
    });
});