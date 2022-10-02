import { addTwoNumbers } from "../src/utils/common";

test("adding in params of 2 and 2 should have output of 4", () => {
  expect(addTwoNumbers(2, 2)).toBe(4);
});
