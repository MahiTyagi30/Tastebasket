import './App.css';
import Header from './components/Header';
import Home from './Home'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Products from './components/Products';
import Categories from './components/Categories';
import Blogs from './components/Blogs';
import About from './About';
import Products2 from './components/Products2';
import Wishlist from './components/Wishlist';
import SignUp from './components/Signup';
import PrivateComponent from './components/PrivateComponent';
import Profile from './components/Profile'
import FruitsPage from './components/FruitsPage'
import EditProfile from './components/EditProfile';
import Bever from './components/BeverPage';
import Grains from './components/GrainsPage';
import BakeryPage from './components/BakeryPage'
import SweetsPage from './components/SweetsPage'
import SnacksPage from './components/SnacksPage'

function App() {
  return (
    <Router>
      <div className="App">
        <Header />
        <Routes >
        <Route path='/' element={<Home />} />
          {/* <Route element={<PrivateComponent/>}> */}
            
          <Route path='/products' element={<Products />} />
          <Route path='/products2' element={<Products2 />} />
          <Route path='/fruits' element={<FruitsPage />} />
          <Route path='/bever' element={<Bever />} />
          <Route path='/grains' element={<Grains/>} />
          <Route path='/bakery' element={<BakeryPage />} />
          <Route path='/sweets' element={<SweetsPage />} />
          <Route path='/snacks' element={<SnacksPage />} />








          <Route path='/category' element={<Categories />} />
          <Route path='/blog' element={<Blogs />} />
          <Route path='/about' element={<About />} />
          <Route path='/signup' element={<SignUp />} />
          <Route path="/wishlist" element={<Wishlist />} />
          <Route path="/profile" element={<Profile/>}/>
          <Route path="/editprofile/:id" element={<EditProfile/>}/>

          {/* </Route> */}
         
          {/* Use 'element' prop instead of 'component' */}
        </Routes>
      </div>
    </Router>
  );
}

export default App;
