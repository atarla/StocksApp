import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import {BrowserRouter, Route, Switch} from 'react-router-dom';
import Header from './components/common/Header';
import List from './components/list/List';
import NotFound from './components/notfound/NotFound';
import Detail from './components/detail/Detail';
import './App.css';

class App extends Component {
    render() {
        return (
            <div className="App">
                <BrowserRouter basename={process.env.PUBLIC_URL}>
                    <div>
                        <Header/>

                        <Switch>
                            <Route path="/" component={List} exact/>
                            <Route path="/stock/:symbol/quote" component={Detail} exact />
                            <Route component={NotFound} />
                        </Switch>
                    </div>
                </BrowserRouter>
            </div>
        );
    }
}

export default App;
