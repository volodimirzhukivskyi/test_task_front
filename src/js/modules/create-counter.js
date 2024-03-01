function Counter(element) {
  const input = element.querySelector('[data-value="counter-value"]');
  const incrementButton = element.querySelector('[data-action="counter-increment"]');
  const decrementButton = element.querySelector('[data-action="counter-decrement"]');

  incrementButton.addEventListener('click', () => {
    input.value = parseInt(input.value) + 1;
  });

  decrementButton.addEventListener('click', (e) => {
    input.value = parseInt(input.value) - 1;
  });

  this.getValue = () => {
    return parseInt(input.value);
  };

  this.setValue = (value) => {
    input.value = value;
  };
}

const counter1 = new Counter(document.querySelector('.product_counter'));
const counter2 = new Counter(document.querySelector('.size_counter'));
