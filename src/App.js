import logo from './logo.svg';
import './App.css';
import Navbar from './components/Navbar';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './components/Home';
import About from './components/About';
import Error from './components/Error';
import SinglePage from './components/SinglePage';
import Contact from './components/Contact';
import Cart from './components/Cart';
import Faq from './components/Faq';
import Fashion from './pages/Fashion';
import Gaming from './pages/Gaming';
import Headphones from './pages/Headphones';
import Electronics from './pages/Electronics';
import Shoes from './pages/Shoes';
import Login from './pages/Login';
import { useState } from 'react';
import ProtectedRoute from './pages/ProtectedRoute';

function App() {
  const [user, setUser] = useState(null)
  return (
    <BrowserRouter>
      
      <Navbar/>
      <Routes>
     
  <Route  path='/' element={<Home user={user}/>}/>
  <Route  path='/about' element={<About/>}/>
  <Route  path='/singlepage/:productId' element={<SinglePage/>}/>
  <Route  path='/contact' element={<Contact/>}/>
  <Route  path='/cart' element={<Cart/>}/>
  <Route  path='/faq' element={<Faq/>}/>
  <Route  path='/shoes' element={<Shoes/>}/>
  <Route  path='/electronics' element={ 
  <ProtectedRoute user={user}>
  <Electronics/> 
  </ProtectedRoute>} />
  <Route  path='/headphones' element={<Headphones/>}/>
  <Route  path='/gaming' element={<Gaming/>}/>
  <Route  path='/fashion' element={<Fashion/>}/>
  <Route  path='/login' element={<Login setUser = {setUser}/>}/>
  <Route  path='*' element={<Error/>}/>

</Routes>
 
  







    </BrowserRouter>
  
    
    
  );
}

export default App;
