class Rectangle {
    get x() {
        return this._x;
    }

    set x(value) {
        this._x = value;
    }

    get y() {
        return this._y;
    }

    set y(value) {
        this._y = value;
    }

    get width() {
        return this._width;
    }

    set width(value) {
        this._width = value;
    }

    get height() {
        return this._height;
    }

    set height(value) {
        this._height = value;
    }

    get color() {
        return this._color;
    }

    set color(value) {
        this._color = value;
    }
    constructor(x,y,width,height, color) {
        this._x = x;
        this._y = y;
        this._width = width;
        this._height = height;
        this._color = color;
    }
    render(canvas) {
        let ctx = canvas.getContext("2d");
        console.log(ctx)
        // ctx.fillStyle(this.color)
        // ctx.fillRect(this.x,this.y,this.width,this.height)
        ctx.beginPath();
        ctx.rect(this.x,this.y,this.width,this.height);
        ctx.stroke();
    }
}