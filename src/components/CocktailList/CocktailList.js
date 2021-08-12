import React from 'react';
import { Link } from 'react-router-dom';

const CocktailList = ({allCocktails,info}) => {
    const {drinks} = info ? info : allCocktails;
    console.log(drinks)
    return (
        <section className='section'>
          <h2 className='section-title'>Cocktails</h2>
          <div className='cocktails-center'>
            {drinks && drinks.map((drink,index) => 
             <article className='cocktail' key={drink.idDrink}>
                <div className='img-container'>
                  <img src={drink.strDrinkThumb}/>
                </div>
                <div className='cocktail-footer'>
                  <h3>{drink.strDrink}</h3>
                  <h4>{drink.strGlass}</h4>
                  <p>{drink.strAlcoholic}</p>
                  <Link to={`/cocktail/${index}`} className='btn btn-primary btn-details'>
                    Details
                  </Link>
                </div>
             </article>)}
          </div>
        </section>
    )
}

export default CocktailList;
