import './App.css';
import LoginPage from './pages/loginPage';
import RegisterPage from './pages/registerPage';
import {store, persistor} from './redux/store';
import { Route, BrowserRouter as Router, Routes } from 'react-router-dom';
import { Provider } from 'react-redux';
import HomePage from './pages/home';
import { PersistGate } from 'redux-persist/integration/react';
import Forget from './components/forget';
import ForgetPage from './pages/forgetpage';
import Home1Page from './pages/home1';
import MenPage from './pages/men';
import WomenPage from './pages/women';
import KidsPage from './pages/kids';
import SandalPage from './pages/sandals';
import SlippersPage from './pages/slippers';
import Heelpage from './pages/heels';
import BootPage from './pages/boots';
import WedgePage from './pages/wedges';
import CartPage from './pages/cart';
import FavouritePage from './pages/favourite';
import AdminPage from './pages/admin';
import AddproductPage from './pages/addproduct';
import Productdetails from './components/productdetails';
import ProductdetailsPage from './pages/productdetails';

function App() {
  return (
    <Provider store={store}>
            <PersistGate loading={null} persistor={persistor}>

    <Router> 
      <Routes>
        <Route path="/" element={<HomePage />} />  
        <Route path="/login" element={<LoginPage />} /> 
        <Route path="/register" element={<RegisterPage />} /> 
        <Route path="/Forget" element={<ForgetPage/>} /> 
        <Route path="/home1" element={<Home1Page/>} /> 
        <Route path="/menpage" element={<MenPage/>} /> 
        <Route path="/w" element={<WomenPage/>} />
        <Route path="/k" element={<KidsPage/>} />
        <Route path="/s" element={<SandalPage/>} /> 
        <Route path="/sl" element={<SlippersPage/>} /> 
        <Route path="/h" element={<Heelpage/>} />
        <Route path="/b" element={<BootPage/>} />
        <Route path="/wed" element={<WedgePage/>} />
        <Route path="/cart" element={<CartPage/>} />
        <Route path="/fav" element={<FavouritePage/>} />
        <Route path="/admin" element={<AdminPage/>} />
        <Route path="/addproduct" element={<AddproductPage/>} />
        <Route path="/productdetails" element={<ProductdetailsPage/>} />
        <Route path="/*" element={<RegisterPage />} />  


      </Routes> 
    </Router> 
    </PersistGate>

    </Provider> 
  );
}

export default App;
