// import logo from './logo.svg';
import './App.css';
import {BrowserRouter as Router, Route,Routes,Link} from 'react-router-dom';
import {Home} from './components/homepage/Home';
import Banner from './components/banner/Banner';
import BannerVal from './components/banner/BannerVal';

function App() {
  return (
    <>
    <Router > 


    <Routes> 
      <Route path="/" element={<Home/>} />
      <Route path="/banner" element={<BannerVal/>} />
    </Routes>
     </Router>
    </>
  );
}

export default App;
