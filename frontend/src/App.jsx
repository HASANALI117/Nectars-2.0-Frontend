// import logo from './logo.svg';

import './App.css';
import {BrowserRouter as Router, Route,Routes,Link} from 'react-router-dom';
import {Home} from './components/homepage/Home';
import Banner from './components/banner/Banner';
import BannerVal from './components/banner/BannerVal';
import ShopHome from "./components/shop/ShopHome";
import Dashboard from "./components/shop/Dashboard";


function App() {
  return (
    <>

      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/:shopName/" element={<ShopHome />} />
          <Route path="/:shopName/home" element={<ShopHome />} />
          <Route path="/:shopName/dashboard" element={<Dashboard />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
