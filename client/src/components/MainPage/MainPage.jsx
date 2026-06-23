import Header from "../Header/Header"
import ProductsList from "../ProductsList/ProductsList"

import './MainPage.css'

const MainPage = () => {
    return (
        <main className="main">
            <Header/>
            <ProductsList />
        </main>
    )
}

export default MainPage