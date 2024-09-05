import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import HomePage from './pages/HomePage';
import UserDetailsPage from './pages/UserDetails';
import Navbar from './components/Navbar';
import UserForm from './components/UserForm';

function App() {
  return (
    <Router>
      {/* Routing for different pages */}
      <Navbar />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/userform/:id" element={<UserForm />} />
        <Route path="/userform" element={<UserForm />} />
        <Route path="/user/:id" element={<UserDetailsPage />} />
      </Routes>
    </Router>
  );
}

export default App;
