import React, {useEffect} from 'react';
import {Router, Route} from 'react-router-dom';
import history from '../history';
import NavBar from './NavBar';
import Search from './Search';
import UserArchive from './UserArchive';
// import {dbAPI} from '../api';
import axios from 'axios'

const App = () => {
    return ( 
        <Router history={history}>
            <NavBar />
            <Route path="/" exact component={Search} />
            <Route path="/user-archive/:id" exact component={UserArchive} />
        </Router>
     );
}
 
export default App;


