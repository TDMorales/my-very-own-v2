import './App.css';
import { Routes, Route } from 'react-router-dom'
import LandingSection from './components/LandingSection/LandingSection';
import SignInPage from './pages/SignInPage/SignInPage';

function App() {
  return (
    <Routes>
      <Route path='/' element={<LandingSection />} />
      <Route path='/sign-in' element={<SignInPage />} />
    </Routes>
  )
}

export default App;
