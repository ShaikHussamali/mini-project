
import Navbar from './components/Navbar/Navbar';
import { BrowserRouter,Routes,  Route } from 'react-router-dom';
import Home from './components/Dashboard/Home';
import About from './components/About/About';
import Contact from './components/Contact/Contact';
import Sign from './components/Signup/Sign';
import Popular from './components/Playerdata/Popular';


function App() {

  return (
    <div className="App">
      <BrowserRouter>
      <div>
        <Navbar />
        <Routes>
          <Route exact path='/' element={<Home/>}/>
          <Route exact path='/home' element={<Home/>}/>
          <Route exact path='/popular' element={<Popular/>}/>
          <Route exact path='/about' element={<About/>}/>
          <Route exact path='/contact' element={<Contact/>}/>
          <Route exact path='/signup' element={<Sign/>}/>
        </Routes>
        </div>
      </BrowserRouter>
    </div>
  )
}

export default App
