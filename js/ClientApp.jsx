import React from 'react';
import { render } from 'react-dom';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Landing from '../Landing';
import Search from '../Search';
// import {database} from '../firebase';

// let modelsData = this.state.modelData;
// database.ref("").set(models.Data);

const FourOhFour = () => <h1>404</h1>;

const App = () => (
    <BrowserRouter>
        <div className="app">
        <Switch>
            <Route exact path='/' component={Landing} />
            <Route path='/search' component={Search} />
            <Route component={FourOhFour}/>
        </Switch>    
        </div>
    </BrowserRouter>
);

render(<App />, document.getElementById('app'));


