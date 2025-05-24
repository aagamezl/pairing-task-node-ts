import { DataPoint } from "../src/DataPoint";
import DataSet from "../src/DataSet";
import { Rectangle } from "../src/Rectangle"
import { PointConsumer } from "../src/PointConsumer";
import { BruteForceAreaFinder } from "../src/BruteForceAreaFinder";
import { AreaFinder } from "../src/AreaFinder";

const DATASET_CSV = "dataset.csv"
const EXPECTED_DATASET_CSV = "expected_dataset.csv"

let dataset;
let expectedResult;
let rect: Rectangle;

beforeAll(() => {
    dataset = DataSet.ReadDataPoints(DATASET_CSV)
    expectedResult = DataSet.ReadDataPoints(EXPECTED_DATASET_CSV)
    rect = new Rectangle(-0.1, -0.1, 0.1, 0.1)

    // console.log(dataset);
});

test('Brute Force Area Finder', () => {
    loadDataset(BruteForceAreaFinder.constructFrom(dataset))
})

const loadDataset = (areaFinder: AreaFinder) => {
    const collector: PointCollector = new PointCollector();
    areaFinder.findPointsInside(rect, collector);
    let actualResult: DataPoint[] = collector.getConsumedPoints();
    expect(actualResult).toStrictEqual(expectedResult)
}

class PointCollector implements PointConsumer {
    results: DataPoint[] = []

    public consumePoint(point: DataPoint) {
        // todo: implement

        return this.results.push(point)
    }

    public getConsumedPoints() {
        return this.results
    }
}


