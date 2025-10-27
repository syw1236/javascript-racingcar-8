import RacingGame from "../src/core/RacingGame.js";
import Car from "../src/domain/Car.js";

describe("RacingGame 로직 테스트", () => {
  test("랜덤값이 4 이상일 때 자동차가 이동해야 한다", () => {
    const car = new Car("pobi");
    const game = new RacingGame(["pobi"], 1);

    game.moveAllCars = () => {
      car.moveForward();
    };

    game.moveAllCars();
    expect(car.position).toBe(1);
  });

  test("랜덤값이 4 미만일 때 자동차가 이동하지 않아야 한다", () => {
    const car = new Car("pobi");
    const game = new RacingGame(["pobi"], 1);

    game.moveAllCars = () => {};

    game.moveAllCars();
    expect(car.position).toBe(0);
  });

  test("가장 멀리 간 자동차가 우승자여야 한다", () => {
    const game = new RacingGame(["pobi", "woni", "jun"], 1);
    game.cars[0].position = 5; // pobi
    game.cars[1].position = 3; // woni
    game.cars[2].position = 5; // jun

    const winners = game.findWinners();
    expect(winners).toEqual(["pobi", "jun"]);
  });
});
