import React, {Component} from "react";
import {BrowserRouter, Route, Routes, Link} from 'react-router-dom';
import '../styles/App.css';
import Home from "./Home";
import About from "./About";
import Error from "./Error";

class App extends Component {
    render() {

        return(
            <div id="main">
               {/* Do not remove the main div */}
               <BrowserRouter>
                <nav>
                    <Link to='/'>Home</Link>
                    <Link to='/about'>About</Link>
                </nav>

                <Routes>
                    <Route path='/' element={<Home/>}/>
                    <Route path='/about' element={<About/>}/>
                    <Route path='*' element={<Error/>}/>
                </Routes>
               </BrowserRouter>
            </div>
        )
    }
}


export default App;
