import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import NavBar from './Components/NavbarComponent/Navbar';
import Footer from './Components/FooterComponet/Footer';
import Home from './Components/HomeComponent/Home';
import Register from './Components/RegisterComponent/Register';
import LoginComponent from './Components/Login/LoginComponent';



function App() {

  return (
    <>
    <NavBar></NavBar>
    {/* <Home></Home> */}
    {/* <Register></Register> */}
    <LoginComponent></LoginComponent>
    <Footer></Footer>
    </>
  )
}

export default App

