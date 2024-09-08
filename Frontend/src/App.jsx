import React from 'react';
import './App.css'
import Header from './components/Header/Header.jsx';
import Footer from './components/Footer/Footer.jsx';
import Routers  from './Route/Route.jsx';
// import Home from './pages/Home.jsx';

function App() {

    return (
        <div>
            <Header/>
            <Routers/>
            {/* <Home /> */}
            <Footer/>
        </div>
    )
}

export default App;