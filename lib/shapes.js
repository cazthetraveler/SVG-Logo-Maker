class Shape {
    constructor(text, textColor, shape, shapeColor) {
        this.text = text;
        this.textColor = textColor;
        this.shape = shape;
        this.shapeColor = shapeColor;
    };
};


Shape.prototype.checkText = (text) => {
    if (text.length <= 3) {
        return true;
    } else {
        return false;
    };
};

Shape.prototype.checkTextColor = (textColor) => {
    if (textColor.match(/#[A-Fa-f0-9]+/g) && textColor.length === 7) {
        return true;
    } else {
        return false;
    };
};

module.exports = Shape;