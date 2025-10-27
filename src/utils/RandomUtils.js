import { Random } from "@woowacourse/mission-utils";

const RandomUtil = {
  getRandomNumber() {
    return Random.pickNumberInRange(0, 9);
  },
};

export default RandomUtil;
