import { FilmDitails } from "Pages/FilmDitails";
import {Home} from "Pages/Home";
import {Movies} from "Pages/Movies";
import { NavLink, } from "react-router-dom";
import { Routes, Route} from "react-router-dom"



export const App = () => {
  return (
    <div>

      
      <header>
<nav>
  <NavLink to = '/'>Home</NavLink>
  <NavLink to = '/Movies'>Movies</NavLink>
  
</nav>
      </header>
    <main>
<Routes>
  <Route path="/" element = {<Home/>} />
  <Route path="/Movies" element = {<Movies/>} />
  <Route path="/ditails/:filmId/*" element = {<FilmDitails/>} />
</Routes>

    </main>
    </div>
  );
};
