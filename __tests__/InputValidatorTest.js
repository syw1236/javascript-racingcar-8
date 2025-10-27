import InputValidator from "../src/utils/InputValidator.js";

describe("InputValidator", () => {
  test("빈 이름이 있으면 예외 발생", () => {
    expect(() => InputValidator.validateCarName("pobi,,jun")).toThrow("[ERROR]");
  });

  test("이름이 5자를 초과하면 예외 발생", () => {
    expect(() => InputValidator.validateCarName("pobi123,woni")).toThrow("[ERROR]");
  });

  test("중복된 이름이 있으면 예외 발생", () => {
    expect(() => InputValidator.validateCarName("pobi,pobi,jun")).toThrow("[ERROR]");
  });

  test("정상적인 이름 입력은 통과", () => {
    expect(InputValidator.validateCarName("pobi,woni,jun")).toEqual(["pobi", "woni", "jun"]);
  });

  test("시도 횟수가 숫자가 아니면 예외 발생", () => {
    expect(() => InputValidator.validateTryCount("abc")).toThrow("[ERROR]");
  });

  test("시도 횟수가 0 이하이면 예외 발생", () => {
    expect(() => InputValidator.validateTryCount("0")).toThrow("[ERROR]");
  });

  test("시도 횟수가 1 이상 숫자면 통과", () => {
    expect(InputValidator.validateTryCount("5")).toBe(5);
  });
});
