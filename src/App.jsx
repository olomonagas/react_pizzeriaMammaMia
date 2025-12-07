import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import { Route, Routes } from 'react-router-dom';
import NavBar from './components/navBarComponent/NavBar';
import Home from './pages/homePage/Home';
import Register from './pages/registerPage/Register';
import Login from './pages/loginPage/Login';
import Profile from './pages/profilePage/Profile';
import Cart from './pages/cartPage/Cart';
import Footer from './components/footerComponent/Footer';
import Pizza from './pages/pizzaPage/Pizza';
import NotFound from './pages/notFoundPage/NotFound';
import ProtecRoute from './components/protecRouteComponent/ProtecRoute'
import UserLog from './components/userLogComponent/UserLog';


function App() {

  return (
    <>
    <NavBar />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/register' element={<UserLog><Register /></UserLog>} />
        <Route path='/login' element={<UserLog><Login /></UserLog>} />
        <Route path='/profile' element={<ProtecRoute><Profile /></ProtecRoute>} />
        <Route path='/cart' element={<Cart />} />
        <Route path="/pizza/:id" element={<Pizza />} />
        <Route path='/404' element={<NotFound />} />
        <Route path='*' element={<NotFound />} />
      </Routes>
    <Footer />
    </>
  )
}

export default App

