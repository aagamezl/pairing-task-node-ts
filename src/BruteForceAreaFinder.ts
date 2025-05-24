import { AreaFinder } from "./AreaFinder";
import { DataPoint } from "./DataPoint";
import { PointConsumer } from "./PointConsumer";
import { Rectangle } from "./Rectangle";

export class BruteForceAreaFinder implements AreaFinder {
    public fullDataSet: DataPoint[] = []

    static constructFrom(dataPoints: DataPoint[]) {
        return new BruteForceAreaFinder(dataPoints)
    }

    constructor(dataPoints: DataPoint[]) {
        this.fullDataSet = dataPoints
    }

    public findPointsInside(rect: Rectangle, consumer: PointConsumer) {
         // TODO: implement

        for (let index = 0; index < this.fullDataSet.length; index++) {
            if (rect.contains(this.fullDataSet[index])) {
                consumer.consumePoint(this.fullDataSet[index])
            }
        }

        return this.fullDataSet
    }
}
