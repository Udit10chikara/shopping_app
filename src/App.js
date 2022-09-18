//import logo from './logo.svg';
//import './App.css';
import {BrowserRouter, Route, Routes} from 'react-router-dom'
import Nav from './components/Nav';
import Home from './components/Home';
import Detail from './components/Detail';
import Cart from './components/Cart';
function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <Nav/>
      <Routes>
        <Route exact path="/" element={<Home/>}/>
        <Route exact path="/product/:id" element={<Detail/>}/>
        <Route exact path="/checkout/cart" element={<Cart/>}/>
        </Routes>
        </BrowserRouter>
    </div>
  );
}

export default App;
