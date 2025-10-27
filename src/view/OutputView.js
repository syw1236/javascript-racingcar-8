import { Console } from "@woowacourse/mission-utils";
import { EXPLAIN } from "../constants.js";

const OutputView = {
    printResultTitle() {
        Console.print(EXPLAIN.result);
    },

    printRound(cars) {
        cars.forEach((car) => {
            Console.print(car.getStatus())
        });
        Console.print("");
    },

    printWinners(winners) {
        Console.print(`${EXPLAIN.winner}${winners.join(", ")}`);
    },
};

export default OutputView;