import React from 'react';
import logo from './logo.svg';
import './App.css';
//import Routes from './routes';
import { BrowserRouter as Router, Route, Routes, Link, useNavigate, } from 'react-router-dom';
import CreateCampaignPage from './components/CreateCampaignPage';

function App() {
  
  return (
    /*
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.tsx</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
    
    <Router>
    <Link to="/create-campaign">
      <button>Create Campaign</button>
    </Link>
    <Routes>
      <Route path="/create-campaign">
        <CreateCampaignPage />
      </Route>
    </Routes>
  </Router>
  */
  <Router>
  <Routes>
    <Route path="/create-campaign" element={
      <CreateCampaignPage />
    }
    >
    </Route>
  </Routes>
</Router>
  );
}

export default App;
