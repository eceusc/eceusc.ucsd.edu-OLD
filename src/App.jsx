import React, { Component } from 'react';
import Menu from './Menu';
import Footer from './Footer';

/*     Routes    */
import Contact from './Routes/Contact';
import DeStress from './Routes/DeStress';
import FacultyMixers from './Routes/FacultyMixers';
import Home from './Routes/Home';
import Mentorship from './Routes/Mentorship';
import OpenSource from './Routes/OpenSource';
import Outreach from './Routes/Outreach';
import Professional from './Routes/Professional';
import Programs from './Routes/Programs';
import Resources from './Routes/Resources';
import StudyJams from './Routes/StudyJams';
import TownHalls from './Routes/TownHalls';
import Wece from './Routes/Wece';

import {Route} from 'react-router-dom';

class App extends Component {
  render() {
    return (
        <React.Fragment>
          <Menu/>
          <div style={{paddingTop: 25, paddingBottom: 25, minHeight: '75vh'}}>
            <Route exact path="/" component={Home}/>
            <Route exact path="/contact" component={Contact} />
            <Route exact path="/deestressers" component={DeStress} />
            <Route exact path="/faculty-mixers" component={FacultyMixers} />
            <Route exact path="/mentorship" component={Mentorship} />
            <Route exact path="/open-source" component={OpenSource} />
            <Route exact path="/outreach" component={Outreach} />
            <Route exact path="/professional-workshops" component={Professional} />
            <Route exact path="/resources" component={Resources} />
            <Route exact path="/study-jams" component={StudyJams} />
            <Route exact path="/town-halls" component={TownHalls} />
            <Route exact path="/women-ece" component={Wece} />
          </div>
          <Footer/>
        </React.Fragment>
    );
  }
}

export default App;
