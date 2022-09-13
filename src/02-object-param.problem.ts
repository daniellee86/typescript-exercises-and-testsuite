import { expect, it } from "vitest";


//both of these are perfectly fine solutions and can replace: {first: number, second: number} 

// type Params = {
//   first: number;
//   second: number;
// }

// interface AddTwoNumbersArgs {
//   first: number;
//   second: number;
// }


//function with in-line typechecking 
export const addTwoNumbers = (params: {first: number, second: number}) => {
  return params.first + params.second;
};


it("Should add the two numbers together", () => {
  expect(
    addTwoNumbers({
      first: 2,
      second: 4,
    }),
  ).toEqual(6);

  expect(
    addTwoNumbers({
      first: 10,
      second: 20,
    }),
  ).toEqual(30);
});
