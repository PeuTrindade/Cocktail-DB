import React from 'react';
import { Link, useParams } from 'react-router-dom';

const Cocktail = ({allCocktails}) => {
    const { index } = useParams();
    const oneDrink = allCocktails.drinks[index];
    console.log(oneDrink)

    return (
        <section className='section cocktail-section'>
          {oneDrink && 
          <>
          <Link className='btn btn-primary' to='/'>Back home</Link>
          <h2 className='section-title'>{oneDrink.strDrink}</h2>
          <div className='drink'>
            <img src={oneDrink.strDrinkThumb}/>
            <div className='drink-info'>
              <p><span className='drink-data'>Name :</span> {oneDrink.strDrink}</p>
              <p><span className='drink-data'>Category :</span> {oneDrink.strCategory}</p>
              <p><span className='drink-data'>Info :</span> {oneDrink.strAlcoholic}</p>
              <p><span className='drink-data'>Glass :</span> {oneDrink.strGlass}</p>
              <p><span className='drink-data'>Instructions :</span> {oneDrink.strInstructions}</p>
            </div>
          </div>
          </>}
        </section>
    )
}

export default Cocktail;
