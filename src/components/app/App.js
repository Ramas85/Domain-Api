import Header from "../header/Header";
import Nav from "../nav/Nav";
import Main from "../main/Main";
import Footer from "../footer/Footer";


import React from 'react';
import {BrowserRouter, Route, Switch} from 'react-router-dom';
import Home from '../home/Home';
import List from '../list/List';
import About from '../about/About';


function App() {
    return ( 
        <BrowserRouter>
        <div className="container-fluid text-center">
            <Header/>
            <Main/>            
            <Nav/> 
            <Switch>
                    <Route exact path="/"/>
                    <Route path="/List" component={List}/>
                    <Route path="/About" component={About}/>
                </Switch>            
            <Footer/>
        </div>
        </BrowserRouter>   
    )
}

export default App;