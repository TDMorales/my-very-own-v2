import './App.css';
import { Routes, Route } from 'react-router-dom'
import LandingSection from './components/LandingSection/LandingSection';

function App() {
  return (
    <Routes>
      <Route path='/' element={<LandingSection />} />
    </Routes>
  )
}

export default App;
