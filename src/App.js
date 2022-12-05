import "./App.css"
import TextForm from "./components/TextForm";
import Nav from "./components/Nav";
import About from "./components/About";
import {
  BrowserRouter as Router,
  Routes,
  Route
} from 'react-router-dom';


function App() {

  return (
    <>
      <Router>
        <Nav />
        <Routes>
          <Route exact path="/" element={<TextForm heading="Enter Text Below" />}></Route>
          <Route exact path="/About" element={<About />}></Route>
        </Routes>
      </Router>
    </>
  );
}

export default App;
