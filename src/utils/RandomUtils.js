import { MissionUtils } from "@woowacourse/mission-utils";

const RandomUtil = {
  getRandomNumber() {
    return MissionUtils.Random.pickNumberInRange(0, 9);
  },
};

export default RandomUtil;
