import * as React from 'react';
import PropTypes from 'prop-types';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import CssBaseline from '@mui/material/CssBaseline';
import Divider from '@mui/material/Divider';
import Drawer from '@mui/material/Drawer';
import IconButton from '@mui/material/IconButton';

import List from '@mui/material/List';

import MenuIcon from '@mui/icons-material/Menu';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Myorders from '../Myorders/Myorders';
import {
  
  Switch,
  Route,
  Link,
 
  useRouteMatch
} from "react-router-dom";
import { Button } from '@mui/material';
import MakeAdmin from '../MakeAdmin/MakeAdmin';
import Reviews from '../Reviews/Reviews';
import Payment from '../Pay/Payment';
import useAuth from '../../../hooks/useAuth';
import AdminRoute from '../../Login/AdminRoute/AdminRoute';
import AllOrder from '../AllOrder/AllOrder';
import AdminAddProduct from '../AdminAddProduct/AdminAddProduct';
import ManageProduct from '../ManageProduct/ManageProduct';

const drawerWidth = 200;

function Dashboard(props) {
  const { window } = props;
  const [mobileOpen, setMobileOpen] = React.useState(false);
  let { path, url } = useRouteMatch();
  const {admin , logout} = useAuth()
  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  const drawer = (
    <div>
      <Toolbar />
      <Divider />
      
      

      
      
      
      
      <List>
      {admin?<div style={{display:'flex' , flexDirection:'column' }}><div>
      <Link to={`${url}/makeAdmin`}><Button color="inherit" >Make Admin</Button></Link></div><div>
      <Link to={`${url}/manageProduct`}><Button color="inherit" >Manage Product</Button></Link></div><div> <Link to={`${url}/addProduct`}><Button color="inherit" >Add Product</Button></Link></div><div><Link to={`${url}`}><Button>TotalOrder</Button></Link></div></div>:<div style={{display:'flex' , flexDirection:'column' }}>
      <div><Link to={`${url}`}><Button>Order</Button></Link></div>
      <div>
      <div><Link to={`${url}/addReview`}><Button>Review</Button></Link></div>
      <div><Link to={`${url}/pay`}><Button>pay</Button></Link></div>
      </div>
      
      </div>}

      <Link to='/'>Home</Link>
      <div>
      <Button onClick={logout}>Log Out</Button>
      </div>
      </List>
     
    </div>
  );

  const container = window !== undefined ? () => window().document.body : undefined;

  return (
    <Box sx={{ display: 'flex' }}>
      <CssBaseline />
      <AppBar
        position="fixed"
        sx={{
          width: { sm: `calc(100% - ${drawerWidth}px)` },
          ml: { sm: `${drawerWidth}px` },
        }}
      >
        <Toolbar>
          <IconButton
            color="inherit"
            aria-label="open drawer"
            edge="start"
            onClick={handleDrawerToggle}
            sx={{ mr: 2, display: { sm: 'none' } }}
          >
            <MenuIcon />
          </IconButton>
          <Typography variant="h6" noWrap component="div">
            {admin?'Admin Dashboard':'User Dashboard'}
          </Typography>
        </Toolbar>
      </AppBar>
      <Box
        component="nav"
        sx={{ width: { sm: drawerWidth }, flexShrink: { sm: 0 } }}
        aria-label="mailbox folders"
      >
        {/* The implementation can be swapped with js to avoid SEO duplication of links. */}
        <Drawer
          container={container}
          variant="temporary"
          open={mobileOpen}
          onClose={handleDrawerToggle}
          ModalProps={{
            keepMounted: true, // Better open performance on mobile.
          }}
          sx={{
            display: { xs: 'block', sm: 'none' },
            '& .MuiDrawer-paper': { boxSizing: 'border-box', width: drawerWidth },
          }}
        >
          {drawer}
        </Drawer>
        <Drawer
          variant="permanent"
          sx={{
            display: { xs: 'none', sm: 'block' },
            '& .MuiDrawer-paper': { boxSizing: 'border-box', width: drawerWidth },
          }}
          open
        >
          {drawer}
        </Drawer>
      </Box>
      <Box
        component="main"
        sx={{ flexGrow: 1, p: 3, width: { sm: `calc(100% - ${drawerWidth}px)` } }}
      >
        <Toolbar />
        <Switch>
        <Route exact path={path}>
          {admin?<AllOrder></AllOrder>:<Myorders></Myorders>}
        </Route>
        <AdminRoute exact path={`${path}/makeAdmin`}>
          <MakeAdmin></MakeAdmin>
        </AdminRoute>
        <AdminRoute exact path={`${path}/addProduct`}>
          <AdminAddProduct></AdminAddProduct>
        </AdminRoute>
        <AdminRoute exact path={`${url}/manageProduct`}>
          <ManageProduct></ManageProduct>
        </AdminRoute>
        <Route exact path={`${url}/addReview`}>
          <Reviews></Reviews>
        </Route>
        <Route exact path={`${url}/pay`}>
          <Payment></Payment>
          
        </Route>
      </Switch>
        

      </Box>
    </Box>
  );
}

Dashboard.propTypes = {
  /**
   * Injected by the documentation to work in an iframe.
   * You won't need it on your project.
   */
  window: PropTypes.func,
};

export default Dashboard;
