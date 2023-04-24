import './App.css';
import Home from './components/Home';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import Header from './components/Header';
import Buy from  './components/Buy'
import ReadBuy from './components/ReadBuy';
import DeleBuy from './components/DeleteBuy';
import UpdateBuy from './components/UpdateBuy';


function App() {
  return (
    <div className="App">
      <Router>
        <Header/>
        

        <Routes>

        <Route exact path='/addpriscription' element={<Buy/>}/>
        <Route exact path='/readPrescription' element={<ReadBuy/>}/>
        <Route exact path='/deletePrescription/:id' element={<DeleBuy/>}/>
        <Route exact path='/updatePrescription/:id' element={<UpdateBuy/>}/>


        </Routes>

      </Router>
    </div>
  );
}

export default App;


