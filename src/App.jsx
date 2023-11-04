import LandingPage from './pages/LandingPage'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import CreateFormPage from './pages/CreateFormPage'

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<LandingPage />}/>
        <Route path='/create-form/:formName' element={<CreateFormPage />} />
      </Routes> 
    </BrowserRouter>
  )
}

export default App
