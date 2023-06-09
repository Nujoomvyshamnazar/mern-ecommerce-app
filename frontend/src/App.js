import './bootstrap.min.css';
import { Route,Routes ,BrowserRouter as Router } from 'react-router-dom';
import './App.css';
import { Container } from 'react-bootstrap'
import Header from './components/Header';
import Footer from './components/Footer';
import HomeScreen from './screens/HomeScreen';
import ProductScreen from './screens/ProductScreen';
import CartScreen from './screens/CartScreen';
import LoginScreen from './screens/LoginScreen';
function App() {
  return (
    <>
    <Router>
    <Header/>
    <main className='py-3'>
      <Container>
      <Routes>
      <Route path='/' element={<HomeScreen/>} exact />
      <Route path='/product/:id' element={<ProductScreen/>} exact />
      <Route path='/cart' element={<CartScreen/>} exact />
      <Route path='/login' element={<LoginScreen/>} exact />
      </Routes>
      </Container>

    </main>
    <Footer/>
    </Router>
    </>
  );
}

export default App;
