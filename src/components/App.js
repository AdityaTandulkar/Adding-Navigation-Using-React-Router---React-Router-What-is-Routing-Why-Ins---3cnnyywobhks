import React, {Component} from "react";
import {BrowserRouter, Route, Routes, NavLink} from 'react-router-dom';
import '../styles/App.css';
import Home from "./Home";
import About from "./About";
import Error from "./Error";
import LocationDisplay from "./LocationDisplay";

class App extends Component {
    constructor(){
        super();
    }
    render() {

        return(
            <BrowserRouter>
                <div id="main">
                {/* Do not remove the main div */}
                    <nav>
                        <NavLink to='/'>Home</NavLink>
                        <NavLink to='/about'>About</NavLink>
                    </nav>

                    <Routes>
                        <Route path='/' element={<Home/>}/>
                        <Route path='/about' element={<About/>}/>
                        <Route path='*' element={<Error/>}/>
                    </Routes>

                    <LocationDisplay />
                </div>
            </BrowserRouter>
        )
    }
}


export default App;
