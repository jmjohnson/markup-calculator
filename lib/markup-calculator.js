
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
    let marked_base_cost = base_cost * (1 + this._base_markup);
    let marked_persons_cost = marked_base_cost * this._persons_markup * persons;
    let category_rate = this._category_markups[category] || 0;
    let marked_category_cost = marked_base_cost * category_rate;

    return this._roundTo2DecimalPlaces(
      marked_base_cost + marked_persons_cost + marked_category_cost);
  }

  _roundTo2DecimalPlaces(x) {
    return Math.round(x * 100) / 100
  }
}

export default MarkupCalculator;
