import './assets/style/global.scss';
import { Routes,Route} from 'react-router-dom';
import Home from './pages/home';
import About from './pages/about';
import Contact from './pages/contact';
import Header from './pages/header';
import Footer from './pages/footer';
function App() {
  return (
    <section className='container'>
      <Header/>
      <Routes>
        <Route path='/SimpleHouse' element={<Home/>}/>
        <Route path='/about' element={<About/>}/>
        <Route path='/contact' element={<Contact/>}/>
      </Routes>
      <Footer/>
    </section>
  );
}

export default App;
