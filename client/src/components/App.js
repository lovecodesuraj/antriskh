
import '../App.css';
import Header from './Header';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import '../css/mousemove.css'
import { useEffect } from 'react';
import ImageOfTheDay from "./ImageOfTheDay"
import Posts from './Posts';
import Home from './Home';
import Tracker from './Tracker';
import Announcement from './announcement';


function App() {
  return (
    <>
      <Tracker />
       <div className='app center'>
      <Router>
        <Header />
     
        <Routes>
          <Route  exact path='/' element={<Home />} />
          <Route exact path='/announcement' element={< Announcement />} />
        </Routes>
      </Router>
       </div>
       
    </>
  );
}

export default App;
