import './css/App.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Add from './AddIcon';
import App2 from './App2';
import About from './About';
import Login from './Login';
import Terms from './Terms';
import CommentPage from './CommentPage';


function App() {
  return (
    <div className="Appp">
      <Router>
          <Routes>
            <Route path="/" element={<App2/>} />
            <Route exact path="/add" element={<Add/>} />
            <Route exact path="/about" element={<About/>} />
            <Route exact path="/home" element={<App2/>} />
            <Route exact path="/login" element={<Login/>} />
            <Route exact path="/terms" element={<Terms/>} />
            <Route exact path="/comments/:confessionId" element={<CommentPage/>} />
          </Routes>
        </Router>
    </div>
  );
}

export default App;
