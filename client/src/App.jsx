import {BrowserRouter, Routes, Route, Link} from 'react-router-dom'

import MainPage from "./components/MainPage/MainPage"
import AuthPage from "./components/AuthPage/AuthPage"
import RegistrationPage from './components/AuthPage/RegistrationPage'
import LoginPage from "./components/AuthPage/LoginPage"

const App = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route path='/' element={ <RegistrationPage/> }/>
                <Route path='/login' element={ <LoginPage/> }/>
                <Route path='/main' element={ <MainPage/> }/>
            </Routes>
        </BrowserRouter>
    )
}

export default App