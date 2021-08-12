import React from 'react';
import './App.css';
import { BrowserRouter,Routes,Route } from 'react-router-dom';
import Navbar from './components/Navbar/Navbar';
import Home from './Pages/Home';
import About from './Pages/About';
import Cocktail from './components/Cocktail/Cocktail';

const App = () => {
    const [allCocktails,setAllCocktails] = React.useState([]);
    const [loading,setLoading] = React.useState(true);
    
    React.useEffect(() => {
       async function getCocktails(){
           const response = await fetch('https://www.thecocktaildb.com/api/json/v1/1/search.php?s=');
           const data = await response.json();
           if(response.ok){
               setAllCocktails(data);
               setLoading(false)
           }
       }
       getCocktails();
    },[])

    return (
        <BrowserRouter>
           <Navbar/>
           <Routes>
               <Route path='/' element={<Home loading={loading} allCocktails={allCocktails}/>}/>
               <Route path='/about' element={<About/>}/>
               <Route path='/cocktail/:index' element={<Cocktail allCocktails={allCocktails}/>}/>
           </Routes>
        </BrowserRouter>
    )
}

export default App;
