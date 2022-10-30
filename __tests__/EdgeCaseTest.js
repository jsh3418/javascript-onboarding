const problem1 = require("../src/problem1");

describe("problem1", () => {
  test("최소 페이지 1미만의 값이 들어오면 예외사항으로 -1이 반환되어야 한다.", () => {
    expect(problem1([0, 1], [197, 198])).toEqual(-1);
  });

  test("최대 페이지 400초과의 값이 들어오면 예외사항으로 -1이 반환되어야 한다.", () => {
    expect(problem1([93, 94], [401, 402])).toEqual(-1);
  });
});
