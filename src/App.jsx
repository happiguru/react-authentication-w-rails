import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './components/Home';
import Dashboard from './components/Dashboard';
import Navbar from './components/Navbar';

const App = () => (
  <div className="app">

    <Router>
      <Navbar />
      <Routes>
        <Route exact path="/" component={<Home />} />
        <Route exact path="/dashboard" component={<Dashboard />} />
      </Routes>
    </Router>
  </div>
);

export default App;
