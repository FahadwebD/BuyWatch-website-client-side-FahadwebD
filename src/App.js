
import './App.css';

import Home from './Pages/Home/Home/Home';
import { BrowserRouter , Switch , Route } from 'react-router-dom';
import Details from './Pages/Details/Details/Details';
import Login from './Pages/Login/Login/Login';
import Register from './Pages/Login/Register/Register';
import AuthProvider from './contexts/AuthProvider/AuthProvider';
import PrivateRoute from './Pages/Login/PrivateRoute/PrivateRoute';

import MoreWatches from './Pages/MoreWatch/MoreWatches/MoreWatches';
import Dashboard from './Pages/Dashboard/Dashboard/Dashboard';

function App() {
  return (
    <div className="App">
      
     <AuthProvider>
     <BrowserRouter>
     <Switch>
       <Route exact path='/'>
       <Home/>
       </Route>
       
       <PrivateRoute exact path ='/explore'>
         <MoreWatches></MoreWatches>
       </PrivateRoute>
       <PrivateRoute  path ='/sdashboard'>
         <Dashboard></Dashboard>
       </PrivateRoute>
       <PrivateRoute  path='/details/:watchId'>
       <Details></Details>
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
