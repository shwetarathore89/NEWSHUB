// import './App.css'
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import FetchData from "./component/FetchData";
import Login from "./component/Login/Login";
import Homepage from "./component/homepage/Home";
import Footer from "./component/Footer";
import Register from "./component/register/Register";
import Navbar from "./component/Navbar";
import Main from "./component/Main";

function App() {
  return (
    <div className="App">
      
      <Router>
        <Navbar />
        <Main />
        <Routes>
          <Route exect path="/" element={<Homepage />} />
          <Route path="/business" element={<FetchData cat="Business" />} />
          <Route path="/sports" element={<FetchData cat="Sports"/>} />
          <Route path="/health" element={<FetchData cat="Health" />} />
          <Route path="/science" element={<FetchData cat="Science" />} />
          <Route path="/entertainment" element={<FetchData cat="Entertainment"/>}/>
          <Route path="/signup" element={<Register />} />  
          <Route path="/login" element={<Login/>}/>  
        </Routes>
        <Footer/>
      </Router>
    </div>
  );
}

export default App;