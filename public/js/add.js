const mainForm = document.querySelector('form[name="main"]');
const ingForm = document.querySelector('form[name="ingForm"]');
const ingredientList = document.querySelector('.ingredientList');
const ingredients = document.querySelectorAll('.ingredient');
let ingredientArray = [];
for (var i = 0; i < ingredientList.childElementCount; i++) {
  let ingredientItem = {
    amount:parseInt(ingredients[i].children[0].innerText),
    measure:ingredients[i].children[1].innerText,
    ingredient:ingredients[i].children[2].innerText
  };
  ingredientArray.push(ingredientItem);
}

function submitRecipe(){
  let url = "/ingredientEdit/" + mainForm.firstElementChild.value;
  const request = new Request(url, {
      method: 'POST',
      body: JSON.stringify(ingredientArray),
      headers: new Headers({
        'Content-Type': 'application/json'
      }),
      redirect:"follow"
    });
  mainForm.submit();
  fetch(request).then(function (res) {
    window.location.replace(res.url);
  });
}

ingForm.addEventListener('submit', function(e) {
  e.preventDefault();
  let ingredientInput = document.querySelector('input[name="ingredient"]'),
  measureInput = document.querySelector('input[name="measure"]'),
  amountInput = document.querySelector('input[name="amount"]');
  let newIngredient = {
    amount:parseInt(amountInput.value),
    measure:measureInput.value,
    ingredient:ingredientInput.value
  };
  ingredientInput.value = "";
  measureInput.value = "";
  amountInput.value = "";

  let newLi = document.createElement("li");
  newLi.innerText = newIngredient.amount + " " + newIngredient.measure + " of " + newIngredient.ingredient;
  ingredientList.appendChild(newLi);
  ingredientArray.push(newIngredient);
});

mainForm.addEventListener('submit', function(e) {
  e.preventDefault();
});
