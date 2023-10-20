
import './App.css';
import Filter from './Filters';
import Infopage from './infopage';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
// import { BrowserRouter as Router, Routes, Route } from "react-router-dom";



function App() {
  return(
    <div>
    <Router>
      <Routes>
        <Route path="/" element={<Filter/>} />
        <Route path="/infopage" element={<Infopage/>} />
      </Routes>
    </Router>
      <Filter/>
      {/* <Infopage/> */}
  
  </div>
   
    
  );
}

export default App;
