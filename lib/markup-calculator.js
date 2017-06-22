
class MarkupCalculator {

  constructor(base_markup, persons_markup, category_markups) {
    this._base_markup = base_markup;
    this._persons_markup = persons_markup;
    this._category_markups = category_markups;
  }

  static getDefaultCalculator() {
    return new MarkupCalculator(0.05, 0.012, {
      food: 0.13,
      drugs: 0.075,
      electronics: 0.02
    });
  }

  calculatePrice(base_cost, persons, category) {
  }
}


