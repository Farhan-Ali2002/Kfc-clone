import './App.css';
import Flexlogin from './components/Flexlogin';
import 'bootstrap/dist/css/bootstrap.css';
import Header from './components/Header';
import Allroutes from './Allroutes';
import {BrowserRouter as Router} from 'react-router-dom'
import Footer from './components/Footer';
function App() {
  return (
    <div className='App'>
      
      
      <Router>
      <header>
      <Header/>
      </header>
      <footer>
        <Footer/>
      </footer>
      <Allroutes/>   
      
      
      
      
      </Router>
    </div>
  );
}

export default App;
