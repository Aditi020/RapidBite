import React from 'react';
import './App.css'
import Header from './components/Header/Header.jsx';
import Footer from './components/Footer/Footer.jsx';
import Routers  from './Route/Route.jsx';

function App() {

    return (
        <div>
            <Header/>
            <Routers/>
            <Footer/>
        </div>
    )
}

export default App;