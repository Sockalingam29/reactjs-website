import './App.css';
import Navbar from './Components/Navbar';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import Home from './Pages/Home';
import about from './Pages/about';
import signup from './Pages/signup';
import products from './Pages/products';
import Footer from './Components/Footer';



function App() {
  return (
    <>
      <Router>
        <Navbar />
        <Switch>
          <Route path='/' exact component={Home} />
          <Route path='/about' exact component={about} />
          <Route path='/products' exact component={products} />
          <Route path='/signup' exact component={signup} />
        </Switch>
        <Footer />
      </Router>
    </>
  );
}

export default App;
