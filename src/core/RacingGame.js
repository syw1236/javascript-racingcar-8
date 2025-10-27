import Car from "../domain/Car.js";
import RandomUtil from "../utils/RandomUtils.js";
import OutputView from "../view/OutputView.js";

class RacingGame {
    constructor(carNames, tryCount) {
        this.cars = carNames.map((name) => new Car(name));
        this.tryCount = tryCount;
    }

    async start() {
        OutputView.printResultTitle();
        for(let i = 0; i < this.tryCount; i++) {
            this.moveAllCars();
            OutputView.printRound(this.cars);
        }
        const winners = this.findWinners();
        OutputView.printWinners(winners);
    }

    moveAllCars() {
        this.cars.forEach((car) => {
            const randomValue = RandomUtil.getRandomNumber();
            if(randomValue >= 4)
                car.moveForward();
        });
    }

    findWinners() {
        const maxPosition = Math.max(...this.cars.map((car) => car.position));
        return this.cars.filter((car) => car.position === maxPosition)
        .map((car) => car.name);
    }
}

export default RacingGame;