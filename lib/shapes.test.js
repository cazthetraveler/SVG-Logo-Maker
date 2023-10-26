const Shape = require("./shapes.js");

describe("checkText", () => {
    it("Should return true if text is at least 3 characters", () => {
        const text = "IDC";
        const shape = new Shape();
        const expected = true;
        expect(shape.checkText(text)).toEqual(expected);
    });
});

describe("checkTextColor", () => {
    it("Should return true if text color is in hexadecimal form.", () => {
        const textColor = "#FFCE00";
        const shape = new Shape();
        const expected = true;
        expect(shape.checkTextColor(textColor)).toEqual(expected);
    });
});