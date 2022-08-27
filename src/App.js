import logo from './logo.svg';
import './App.css';
import {
  BrowserRouter,
  Routes,
  Route,
  Link,
} from "react-router-dom";
import CardList from './CardList';
import Button from '@mui/material/Button'
import LogIn from './LogIn';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
function App() {
  return (
    <BrowserRouter>
        {/* <ul>
          <li><Link to='/CardList'>CARDLIST</Link></li>
          <li>
            <Button to='/LogIn'>LOGIN</Button>
          </li>
        </ul> */}
      <Routes>
        <Route path="/" element={<LogIn/>} />
        <Route path="/CardList" element={<CardList/>} />
        <Route path="/LogIn" element={<LogIn/>} />
      </Routes>
    </BrowserRouter>
      
  );
}

export default App;
