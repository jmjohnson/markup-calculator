import MarkupCalculator from '../lib/markup-calculator.js'

describe("Markup business logic", () => {
  // Idiomatic jasmine.
  let calculator;
  beforeEach(() => {
    calculator = MarkupCalculator.getDefaultCalculator();
  });

  it("should solve for use case 1.", () => {
    let base_cost = 1299.99;
    let num_people = 3;
    let category = 'food';

    let final_price = calculator.calculatePrice(base_cost, num_people, category);
    expect(final_price).toBe(1591.58);
  });

  it("should solve for use case 2.", () => {
    let base_cost = 5432.00;
    let num_people = 1;
    let category = 'drugs';

    let final_price = calculator.calculatePrice(base_cost, num_people, category);
    expect(final_price).toBe(6199.81);
  });

  it("should solve for use case 3.", () => {
    let base_cost = 12456.95;
    let num_people = 4;
    let category = 'books';

    let final_price = calculator.calculatePrice(base_cost, num_people, category);
    expect(final_price).toBe(13707.63);
  });

  it("should not crash if there's no category.", () => {
    let base_cost = 12456.95;
    let num_people = 4;
    let category = undefined;

    let final_price = calculator.calculatePrice(base_cost, num_people, category);
    expect(final_price).toBe(13707.63);
  });
});

