import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import NavBar from './Components/NavBarComponent/NavBar';
import Home from './Components/HomeComponent/Home';
import Footer from './Components/FooterComponet/Footer';
// import Register from './Components/RegisterComponent/Register';
// import Login from './Components/LoginComponent/Login';


function App() {

  return (
    <>
    <NavBar />
    <Home />
    {/* <Register /> */}
    {/* <Login /> */}
    <Footer />
    </>
  )
}

export default App

