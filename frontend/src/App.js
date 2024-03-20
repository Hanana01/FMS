import React from 'react';
import MyNavbar from './component/Navbar';
import { BrowserRouter as Router, Route, Routes} from 'react-router-dom';
import Home from './component/Home';



function App() {
 
return (
    <div>
      <Router>
        <MyNavbar />
         <Routes>
         <Route exact path="/home" element ={<Home/>} />
         </Routes>
       
       </Router>
    </div>
  );
}

export default App;