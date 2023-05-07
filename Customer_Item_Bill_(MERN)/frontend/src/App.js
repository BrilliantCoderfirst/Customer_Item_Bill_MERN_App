import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.min.js';
import MainNavbar from './components/MainNavbar';
import CustomerHome from './pages/CustomerHome';
import AddCustomer from './pages/AddCustomer';
import EditCustomer from './pages/EditCustomer';
import AddItemsCustomer from './pages/AddItemsCustomer';
import ItemsHome from './pages/ItemsHome';
import AddItems from './pages/AddItems';
import EditItems from './pages/EditItems';
import BillHome from './pages/BillHome';
import GenerateBill from './pages/GenerateBill';
import SignUp from './pages/SignUp';
import Login from './pages/Login';
import { Routes, Route, useLocation } from 'react-router-dom';

function App() {

  const location = useLocation();


  return (
    <>
        {location.pathname == '/' ? <Login /> : location.pathname == '/signup' ? <SignUp /> : <MainNavbar />}

        
        <Routes>
          <Route path='/customers' element={<CustomerHome />} />
          <Route path='/addcustomer' element={<AddCustomer />} />
          <Route path='/editcustomer/:id' element={<EditCustomer />} />
          <Route path='/additemcustomer/:id' element={<AddItemsCustomer />} />
          <Route path='/items' element={<ItemsHome />} />
          <Route path='/additem' element={<AddItems />} />
          <Route path='/edititem/:id' element={<EditItems />} />
          <Route path='/bills' element={<BillHome />} />
          <Route path='/generatebill/:id' element={<GenerateBill />} />
        </Routes>
    </>
  );
}

export default App;
