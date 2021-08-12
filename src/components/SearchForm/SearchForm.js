import React from 'react';

const SearchForm = ({setSearch,search}) => {
    
    return (
        <section className='section search'>
          <form className='search-form'>
            <div className='form-control'>
              <label htmlFor='name'>Search your favorite cocktail</label>
              <input value={search} onChange={({target}) => setSearch(target.value)} type='text' name='name' id='name'/>
            </div>
          </form>
        </section>
    )
}

export default SearchForm;
