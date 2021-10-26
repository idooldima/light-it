import { Route, BrowserRouter, Router } from "react-router-dom";
import { useState, useEffect } from "react";
import './App.css';
import { map } from 'lodash'
import routes from "./routes";
import history from './history';
import { Box, AppBar, Toolbar, Button } from "@material-ui/core";
import { currentUserSelector } from "./store/auth/selectors";
import { useDispatch, useSelector } from "react-redux";
import { logout, signInSuccess } from './store/auth/actions'
import { getSessionStorageData } from "./lib";



function App() {
  const user = useSelector(currentUserSelector)
  const dispatch = useDispatch()
  const logoutacc = () => (
    dispatch(logout()

    )
  )
  const [appLoaded, setAppLoaded] = useState(false);

  useEffect(() => {
    const user = getSessionStorageData('currentUser');
    if (user) {
      dispatch(signInSuccess(user))
    }
    setAppLoaded(true);
  }, []);

  if (!appLoaded) {
    return null
  }
  return (
    <div className="App">
      {!!user &&
        < Box sx={{ flexGrow: 1 }}>
          <AppBar position="static">
            <Toolbar>
              <Button
                onClick={logoutacc}
                color="inherit">Logout</Button>
            </Toolbar>
          </AppBar>
        </Box>}
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
    </div >
  );
}

export default App;
