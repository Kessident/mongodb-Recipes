// const form = document.querySelector('form[name="main"]');
// // const ingForm = document.querySelector('form[name="ingForm"]');
// const ingredientList = document.querySelector('.ingredientList');
// let ingredientArray = [];
//
//
// mainForm.addEventListener('submit', function(e) {
//   e.preventDefault();
// });
//
// function submitRecipe() {
//   form.submit();
// }
//
// ingForm.addEventListener('submit', function(e) {
//   e.preventDefault();
//   let ingredientInput = document.querySelector('input[name="ingredient"]'),
//   measureInput = document.querySelector('input[name="measure"]'),
//   amountInput = document.querySelector('input[name="amount"]');
//   let newIngredient = {
//     ingredient:ingredientInput.value,
//     measure:measureInput.value,
//     amount:parseInt(amountInput.value)
//   };
//   ingredientInput.value = "";
//   measureInput.value = "";
//   amountInput.value = "";
//
//   let newLi = document.createElement("li");
//   newLi.innerText = newIngredient.amount + " " + newIngredient.measure + " of " + newIngredient.ingredient;
//   ingredientList.appendChild(newLi);
//   ingredientArray.push(newIngredient);
// });
