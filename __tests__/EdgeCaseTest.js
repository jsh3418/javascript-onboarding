const problem1 = require("../src/problem1");

describe("problem1", () => {
  test("최소 페이지 1미만의 값이 들어오면 예외사항으로 -1이 반환되어야 한다.", () => {
    expect(problem1([0, 1], [197, 198])).toEqual(-1);
  });

  test("최대 페이지 400초과의 값이 들어오면 예외사항으로 -1이 반환되어야 한다.", () => {
    expect(problem1([93, 94], [401, 402])).toEqual(-1);
  });

  test("왼쪽 페이지가 홀수이어야 한다.", () => {
    expect(problem1([98, 99], [193, 194])).toEqual(-1);
    expect(problem1([99, 100], [196, 197])).toEqual(-1);
  });

  test("오른쪽 페이지가 짝수이어야 한다.", () => {
    expect(problem1([99, 100], [194, 195])).toEqual(-1);
    expect(problem1([100, 101], [193, 194])).toEqual(-1);
  });

  test("pobi와 crong의 배열 길이가 2가 아닌 경우 예외사항을 반환해야 한다.", () => {
    expect(problem1([1, 2, 3], [193, 194])).toEqual(-1);
    expect(problem1([100, 101], [20, 21, 22])).toEqual(-1);
  });

  test("시작 면이나 마지막 면이 나오도록 책을 펼치지 않는다.", () => {
    expect(problem1([undefined, 2], [193, 194])).toEqual(-1);
    expect(problem1([101, 102], [21, undefined])).toEqual(-1);
    expect(problem1([null, 102], [21, 22])).toEqual(-1);
    expect(problem1([101, 102], [21, null])).toEqual(-1);
  });

  test("페이지의 값이 정상적으로 들어오지 않으면 예외사항을 반환해야 한다.", () => {
    expect(problem1(undefined, [193, 194])).toEqual(-1);
    expect(problem1([101, 102], undefined)).toEqual(-1);
    expect(problem1(null, [21, 22])).toEqual(-1);
    expect(problem1([101, 102], null)).toEqual(-1);
    expect(problem1(null)).toEqual(-1);
    expect(problem1("정상적이지 않은 값")).toEqual(-1);
  });
});
