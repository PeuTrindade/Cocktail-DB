import React from 'react';
import CocktailList from '../components/CocktailList/CocktailList';
import Loading from '../components/Loading/Loading';
import SearchForm from '../components/SearchForm/SearchForm';

const Home = ({allCocktails,loading}) => {
    const [search,setSearch] = React.useState(null);
    const [info,setInfo] = React.useState(null);
    
    React.useEffect(() => {
      if(search){
        fetch(`https://www.thecocktaildb.com/api/json/v1/1/search.php?s=${search}`)
      .then((res) => res.json())
      .then((json) => setInfo(json))
      }   
    },[search])
    return (
        <main>
          <SearchForm search={search} setSearch={setSearch}/>
          {loading ? <Loading/> : <CocktailList setInfo={setInfo} info={info} allCocktails={allCocktails}/>}
        </main>
    )
}

export default Home
