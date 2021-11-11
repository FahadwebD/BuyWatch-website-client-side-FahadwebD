
import './App.css';

import Home from './Pages/Home/Home/Home';
import { BrowserRouter , Switch , Route } from 'react-router-dom';
import Details from './Pages/Details/Details/Details';
import Login from './Pages/Login/Login/Login';
import Register from './Pages/Login/Register/Register';
import AuthProvider from './contexts/AuthProvider/AuthProvider';
import PrivateRoute from './Pages/Login/PrivateRoute/PrivateRoute';
import MoreWatch from './Pages/MoreWatch/MoreWatch';

function App() {
  return (
    <div className="App">
      
     <AuthProvider>
     <BrowserRouter>
     <Switch>
       <Route exact path='/'>
       <Home/>
       </Route>
       <Route exact path='/details/:watchId'>
       <Details></Details>
       </Route>
       <PrivateRoute exact path ='/explore'>
         <MoreWatch></MoreWatch>
       </PrivateRoute>
     </Switch>
     <Route exact path='/login'>
       <Login></Login>
     </Route>
     <Route exact path='/register'>
       <Register></Register>
     </Route>
     </BrowserRouter>
     </AuthProvider>
    </div>
  );
}

export default App;
