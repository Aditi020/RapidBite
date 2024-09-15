import React from 'react';
import './App.css';
import Header from './components/Header/Header.jsx';
import Footer from './components/Footer/Footer.jsx';
import { useLocation } from 'react-router-dom';
import { CSSTransition, TransitionGroup } from 'react-transition-group'; // Import for transitions
import Routers from './Route/Route.jsx';
import "./styles/PageTransition.css";
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
    const location = useLocation(); // Get the current location from react-router

    return (
        <div>
            <Header />
            {/* Transition Group to wrap around the routes for transition effect */}
            <TransitionGroup>
                <CSSTransition
                    key={location.key}
                    timeout={900} // Set the duration for animation
                    classNames="page" // Reference the page 
                >
                    <Routers />
                </CSSTransition>
            </TransitionGroup>
            <Footer />
        </div>
    );
}

export default App;
