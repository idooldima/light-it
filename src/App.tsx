import { Route, Link, BrowserRouter, Router } from "react-router-dom";
import './App.css';
import { map } from 'lodash'
import routes from "./routes";
import history from './history';


function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Router history={history}>
          <div>
            {map(routes, (route) => (
              <Route key={route.path} path={route.path} exact={route.exact}>
                <route.component />
              </Route>
            ))}
          </div>
        </Router>
      </BrowserRouter>
    </div>
  );
}

export default App;
