export class DataPoint {
    private EPSILON = 0.000001;
    x: any;
    y: any;

    constructor(x: number, y: number)
    {
        this.x = x;
        this.y = y;
    }

    Equals(value: any): boolean {
        if (value instanceof DataPoint)  {
            var that = value as DataPoint
            return Math.abs(this.x - that.x) < this.EPSILON && Math.abs(this.y - that.y) < this.EPSILON;
        }
        return false
    }

    toString() {
        // console.log(this.x);
        // console.log(this.y);
    }

}
