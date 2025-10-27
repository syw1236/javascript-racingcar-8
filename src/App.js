import { Console } from "@woowacourse/mission-utils";
import { EXPLAIN } from "./constants.js";
import InputValidator from "./utils/InputValidator.js";
import RacingGame from "./core/RacingGame.js";

class App {
  async run() {
    try {
    Console.print(EXPLAIN.carName);
    const input = await Console.readLineAsync();
    const carNames = InputValidator.validateCarName(input);

    Console.print(EXPLAIN.tryCount);
    const tryInput = await Console.readLineAsync();
    const tryCount = InputValidator.validateTryCount(tryInput);

    const game = new RacingGame(carNames, tryCount);
    await game.start();

    } catch(error) {
      Console.print(error.message);
      throw error;
    }
  }
}

export default App;
