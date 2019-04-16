const BASE_URL = '/api/recipe/';

export default {
  newRecipe,
  filterRecipe,
  getAll,
};

function newRecipe(recipe) {
  const options = {
    method: 'POST',
    headers: {'Content-Type': 'application/json'},
    body: JSON.stringify(recipe)
  };
  return fetch(BASE_URL, options)
  .then(res => {
    console.log('recipeServices');

    // Probably a duplicate email
    throw new Error('we messed up!');
  })
  // Parameter destructuring!
  // .then(({token}) => tokenService.setToken(token));
  // The above could have been written as
  //.then((token) => token.token);
}

function filterRecipe(ingredients) {
  const options = {
    method: 'POST',
    headers: {
      'Content-type': 'application/json',
    },
    body: JSON.stringify(ingredients),
  };
  return fetch(BASE_URL + 'filter', options).then(res => {

      return res.clone().json();


  })
}
function getAll() {
  const options = {
    method: 'GET',
    headers: {
      'Content-type': 'application/json',
    },
  };
  return fetch(BASE_URL + 'getAll', options).then(res => {
    console.log(res);
    return res.clone().json();
  }

)
}
