import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import 'bootstrap/dist/css/bootstrap.min.css';

// Routes
import Home from './components/Home/Home';
import Skills from './components/Skills/Skills';
import Projects from './components/Project/Projects';
import AboutMe from './components/AboutMe/AboutMe';
import ContactMe from './components/ContactMe/ContactMe';

const App = () => {

    return (
        <Router>
            <Switch>
                <Route path='/my-portfolio' exact component={Home} />
                <Route path='/my-portfolio/skills' exact component={Skills} />
                <Route path='/my-portfolio/experiences' exact component={Projects} />
                <Route path='/my-portfolio/about-me' exact component={AboutMe} />
                <Route path='/my-portfolio/contact-me' exact component={ContactMe} />
            </Switch>
        </Router>
    )
}

export default App
