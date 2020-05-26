class Polygon {

    constructor(...arr) {
        arr.forEach((s) => this.side = s)
    }

    get countSides() {
        return this.side.length
    }

    get perimeter() {
     return this.side.reduce((a, b) => a + b, 0)   
    }

}

class Triangle extends Polygon {

    get isValid() {
        return ((this.side[0] + this.side[1] > this.side[2]) && 
        (this.side[0] + this.side[2] > this.side[1]) && (this.side[1] + this.side[2] > this.side[0]))
    }


}

class Square extends Polygon {

    get isValid() {
        return ((this.side[0] === this.side[1]) && (this.side[0] === this.side[2]) && (this.side[0] === this.side[3]))
    }

    get area() {
        return this["side"][0] * this.side[0]
    }


}