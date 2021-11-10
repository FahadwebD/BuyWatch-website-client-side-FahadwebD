import logo from './logo.svg';
import './App.css';
import Navbar from './Pages/Shared/Navbar/Navbar';
import Home from './Pages/Home/Home/Home';
import { BrowserRouter , Switch , Route } from 'react-router-dom';
import Details from './Pages/Details/Details/Details';
import Login from './Pages/Login/Login';

function App() {
  return (
    <div className="App">
      
     <BrowserRouter>
     <Switch>
       <Route exact path='/'>
       <Home/>
       </Route>
       <Route exact path='/details/:watchId'>
       <Details></Details>
       </Route>
     </Switch>
     <Route exact path='/login'>
       <Login></Login>
     </Route>
     </BrowserRouter>
    </div>
  );
}

export default App;
