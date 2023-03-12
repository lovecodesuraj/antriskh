
import '../App.css';
// import Header from './partials/header/Header';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import '../css/mousemove.css'
import { useEffect } from 'react';
import Posts from './posts/Posts';
import Home from './home/Home';
import Tracker from './others/Tracker';
import Footer from './partials/footer/footer.jsx';
import AdminCell from './adminCell/adminCell';
import Contact from './contact/contact';
import Gallery from './gallery/Gallery';
import Faqs from './faqs/faqs.jsx';
import Navbar from './partials/header/navbar/Navbar';
import JoinForm from './forms/join/JoinForm';

function App() {
  return (
    <>
      <div className='app '>
      <Router>
        <Navbar />
        <Routes>
          <Route  exact path='/' element={<Home />} />
          <Route  exact path='/join' element={<JoinForm />} />
          <Route exact path="/blogs" element={<Posts />} />
          <Route exact path="/contact" element={<Contact />} />
          <Route exact path="/gallery" element={<Gallery/>}/>
          <Route exact path="/faqs" element={<Faqs />}/>
          <Route exact path="/ilovecosmos" element ={<AdminCell />}  />
        </Routes>
      </Router>
       </div>
       {/* <Footer /> */}
    </>
  );
}

export default App;


//https://images.pexels.com/photos/33688/delicate-arch-night-stars-landscape.jpg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1