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
    expect(final_price).toBe(1591.58)
  });

});

