// import logo from './logo.svg';
import './App.css';
import {BrowserRouter as Router, Route,Routes,Link} from 'react-router-dom';
import {Home} from './components/homepage/Home';

function App() {
  return (
    <>
    <Router > 
   

    <Routes> 
      <Route path="/" element={<Home/>} />
    </Routes>
     </Router>
    </>
  );
}

export default App;
