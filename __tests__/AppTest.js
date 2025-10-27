import App from "../src/App.js";
import { Console } from "@woowacourse/mission-utils";

jest.mock("@woowacourse/mission-utils", () => ({
  Console: {
    print: jest.fn(),
    readLineAsync: jest.fn(),
  },
  Random: {
    pickNumberInRange: jest.fn(() => 4), // 항상 이동하도록 mock
  },
}));

describe("App 전체 흐름 테스트", () => {
  test("전체 게임이 정상적으로 종료되어야 한다", async () => {
    Console.readLineAsync
      .mockResolvedValueOnce("pobi,woni,jun")
      .mockResolvedValueOnce("3");

    const app = new App();
    await app.run();

    expect(Console.print).toHaveBeenCalled();
  });
});
