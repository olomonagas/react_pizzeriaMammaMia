import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import NavBar from './Components/NavBarComponent/NavBar';
import Home from './Components/HomeComponent/Home';
import Footer from './Components/FooterComponet/Footer';
import Register from './Components/RegisterComponent/Register';
import LoginComponent from './Components/LoginComponent/LoginComponent';

function App() {

  return (
    <>
    <NavBar></NavBar>
    <Home></Home>
    {/* <Register></Register> */}
    {/* <LoginComponent></LoginComponent> */}
    <Footer></Footer>
    </>
  )
}

export default App

