import { DataPoint } from "./DataPoint";

abstract class Quadrilateral {
    public x1: number;
    public x2: number;
    public y1: number;
    public y2: number;

    constructor(x1, y1, x2, y2) {
        this.x1 = x1
        this.x2 = x2
        this.y1 = y1
        this.y2 = y2
    }
}

export class Rectangle extends Quadrilateral {
    constructor(x1?: number, y1?: number, x2?: number, y2?:number) {
        super(
            x1 != undefined ? x1 : Number.POSITIVE_INFINITY,
            y1 != undefined ? y1 : Number.POSITIVE_INFINITY,
            x2 != undefined ? x2 : Number.NEGATIVE_INFINITY,
            y2 != undefined ? y2 : Number.NEGATIVE_INFINITY)
    }

    contains(point:DataPoint): boolean {
        // return false
        return point.x >= this.x1 && point.x <= this.x2 &&
            point.y >= this.y1 && point.y <= this.y2
    }
}
