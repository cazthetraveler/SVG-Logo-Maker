class Shape {
    constructor(text, textColor, shape, shapeColor) {
        this.text = text;
        this.textColor = textColor;
        this.shape = shape;
        this.shapeColor = shapeColor;
    };
};

class Circle extends Shape {
    constructor(text, textColor, shape, shapeColor) {
        super(text, textColor, shape, shapeColor);
    };
};

class Triangle extends Shape {
    constructor(text, textColor, shape, shapeColor) {
        super(text, textColor, shape, shapeColor);
    };
};

class Square extends Shape {
    constructor(text, textColor, shape, shapeColor) {
        super(text, textColor, shape, shapeColor);
    };
};

// SET COLOR

Circle.prototype.setColor = (shapeColor) => {
    if (shapeColor.match(/#[A-Fa-f0-9]+/g) && shapeColor.length === 7){
        this.shapeColor = shapeColor;
    } else {
        throw new Error("Shape color needs to be in hexadecimal form, ex: #123ABC.");
    };
};

Circle.prototype.render = () => {
    return `<circle cx="150" cy="100" r="80" fill="${this.shapeColor}" />`;
};

Triangle.prototype.setColor = (shapeColor) => {
    if (shapeColor.match(/#[A-Fa-f0-9]+/g) && shapeColor.length === 7){
        this.shapeColor = shapeColor;
    } else {
        throw new Error("Shape color needs to be in hexadecimal form, ex: #123ABC.");
    };
};

Triangle.prototype.render = () => {
    return `<polygon points="150, 18 244, 182 56, 182" fill="${this.shapeColor}" />`;
};

Square.prototype.setColor = (shapeColor) => {
    if (shapeColor.match(/#[A-Fa-f0-9]+/g) && shapeColor.length === 7){
        this.shapeColor = shapeColor;
    } else {
        throw new Error("Shape color needs to be in hexadecimal form, ex: #123ABC.");
    };
};

Square.prototype.render = () => {
    return `<rect width="150" height="150" fill="${this.shapeColor}" />`;
};

module.exports = {
    Circle,
    Triangle,
    Square
}