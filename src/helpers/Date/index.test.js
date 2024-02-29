
import { getMonth } from './index'; // Assurez-vous de pointer vers le bon chemin

describe("Date helper", () => {
  describe("When getMonth is called", () => {
    it("the function returns 'janvier' for the date 2022-01-01", () => {
      const date = new Date("2022-01-01");
      expect(getMonth(date)).toBe("janvier");
    });
    it("the function returns 'juillet' for the date 2022-07-08", () => {
      const date = new Date("2022-07-08");
      expect(getMonth(date)).toBe("juillet");
    });
  });
});

