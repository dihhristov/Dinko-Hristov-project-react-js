
import './App.css';
import { Route, Routes } from 'react-router-dom';
import React from 'react';
import { Home } from './Components/Home';
import { About } from './Components/About';
import { Header } from './Components/Header';
import { Contact } from './Components/Contact';
import { Schedule } from './Components/Schedule';
import { Reviews } from './Components/Reviews';
import { Booking } from './Components/Booking';
import { Login } from './Components/Login';
import { Register } from './Components/Register';

function App() {
    // const [medico, setMedico] = useState([])
    return (
        <div className="App">

            <Header />

            <main />
            <Routes>
                <Route path='/' element={<Home />} />
                <Route path='/about' element={<About />} />
                <Route path='/contact' element={<Contact />} />
                <Route path='/schedule' element={<Schedule />} />
                <Route path='/reviews' element={<Reviews />} />
                <Route path='/booking' element={<Booking />} />
                <Route path='/login' element={<Login />} />
                <Route path='/register' element={<Register />} />
            </Routes>
            <main />


        </div>



    );
}

export default App;
