// objects.js
// Handles Smoothie form and class

//Wait until DOM is ready
document.addEventListener("DOMContentLoaded", () => {
  const form = document.getElementById('smoothieForm');
  const output = document.getElementById('output');

  //Smoothie class
  class Smoothie {
    constructor(size, base, ingredients) {
      this.size = size;
      this.base = base;
      this.ingredients = ingredients;
    }

    describe() {
      if (this.ingredients.length === 0) {
        return `You ordered a ${this.size} smoothie with ${this.base} as the base but no ingredients selected.`;
      }
      return `You ordered a ${this.size} smoothie with ${this.base} as the base, containing: ${this.ingredients.join(", ")}.`;
    }
  }

  // Handle form submit
  form.addEventListener('submit', (event) => {
    event.preventDefault();

    const size = form.elements['size'].value;
    const base = form.elements['base'].value;
    const selectedIngredients = Array.from(form.elements['ingredients'])
      .filter(input => input.checked)
      .map(input => input.value);

    const smoothie = new Smoothie(size, base, selectedIngredients);
    output.textContent = smoothie.describe();
  });
});

