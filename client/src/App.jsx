import {BrowserRouter, Routes, Route, Link} from 'react-router-dom'

import MainPage from "./components/MainPage/MainPage"
import RegistrationPage from './components/AuthPage/RegistrationPage'
import LoginPage from "./components/AuthPage/LoginPage"
import AdminPage from './components/AdminPage/AdminPage'

const App = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route path='/' element={ <MainPage/> }/>
                <Route path='/register' element={ <RegistrationPage/> }/>
                <Route path='/login' element={ <LoginPage/> }/>
                <Route path='/admin' element={ <AdminPage/> }/>
            </Routes>
        </BrowserRouter>
    )
}

export default App