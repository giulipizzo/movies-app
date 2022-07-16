import { MoviesGrid } from "./components/MoviesGrid";
import './App.Module.css';
import {
    BrowserRouter,
    Routes,
    Route,
    Link,
  } from "react-router-dom";
import { MovieDetails } from "./pages/MovieDetails";
import { LandingPage } from "./pages/LandingPage";

export function App(){
    return (
        <BrowserRouter>
            <header>
                <Link to='/'><h1 className="Titulo">Halo+</h1> </Link>
            </header>
            <main>
                <Routes>
                    <Route path='/movies/:movieId' element= {<MovieDetails/>} />
                    <Route path='/' element = {<LandingPage/>} />
                </Routes>  
            </main>
        </BrowserRouter>
    )
}
