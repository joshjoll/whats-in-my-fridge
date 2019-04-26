import React from 'react';
import Recipe from '../Recipe/Recipe';

// import { Link } from 'react-router-dom';


const UserRecipes = (props) => {
  return (
    <div >
    <h3> {props.user.name}'s favorite recipes </h3>
      {props.user.favorites ?
      <div className="userFavorites">
      {props.user.favorites.map((recipe) =>
        <Recipe
          recipe={recipe}
        />
      )}
      </div>
    :
      <h4> Once you favorite a recipe, it'll show up here </h4>
    }
    </div>
  );

};

export default UserRecipes;
