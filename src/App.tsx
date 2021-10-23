
import './App.css';
import SignIn from './pages/auth/signIn'
import SignUp from './pages/auth/signUp';
import Catalog from './pages/catalog';

function App() {
  return (
    <div className="App">
      <SignUp></SignUp>
      <Catalog></Catalog>
    </div>
  );
}

export default App;
