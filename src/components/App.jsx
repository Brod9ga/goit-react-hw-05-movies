import { FilmDitails } from "Pages/FilmDitails";
// import {Home} from "Pages/Home";
// import {Movies} from "Pages/Movies";
import { Suspense, lazy } from "react";
import { NavLink, } from "react-router-dom";
import { Routes, Route} from "react-router-dom"
const Home = lazy(()=>import('Pages/Home'))
const Movies = lazy(()=>import('Pages/Movies'))

export const App = () => {
  return (
    <div>

      
      <header>
<nav>
  <NavLink to = '/'>Home</NavLink>
  <NavLink to = '/movies'>Movies</NavLink>
  
</nav>
      </header>
    <main>
      <Suspense>
      <Routes>
  <Route path="/" element = {<Home/>} />
  <Route path="/movies" element = {<Movies/>} />
  <Route path="/ditails/:filmId/*" element = {<FilmDitails/>} />
</Routes>
      </Suspense>


    </main>
    </div>
  );
};
